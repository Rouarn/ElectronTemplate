import { app } from 'electron'
import { autoUpdater, type UpdateInfo } from 'electron-updater'
import { IPC_EVENTS, type UpdaterStatus } from '@shared/ipc'
import { logger } from './logger'
import { emitToRenderer } from './window'

/** 允许通过环境变量覆盖更新源，便于灰度与私有化部署 */
const FEED_URL_OVERRIDE = process.env.APP_UPDATE_FEED_URL ?? null
/** 仅本地联调时允许明文 HTTP，正式环境必须 HTTPS */
const ALLOW_INSECURE_FEED = process.env.ALLOW_INSECURE_UPDATE === '1'

interface DownloadProgressPayload {
  percent: number
  transferred: number
  total: number
}

/**
 * 自动更新服务。
 *
 * 安全策略：
 * 1. 未打包时完全不启用更新，避免开发环境误连更新源
 * 2. 更新源必须为 HTTPS（除非显式允许明文）
 * 3. 更新包必须自带 sha512，交由 electron-updater 校验完整性
 * 4. macOS 侧由 electron-updater 校验应用签名；Windows 侧需在发布流程中签名安装包
 */
class UpdaterService {
  private initialized = false
  private supported = false

  private status: UpdaterStatus = {
    state: 'idle',
    message: '尚未检查更新',
    updatedAt: Date.now(),
  }

  init(): void {
    if (this.initialized) return
    this.initialized = true

    if (!app.isPackaged) {
      this.publish({ state: 'unsupported', message: '开发环境不检查更新', updatedAt: Date.now() })
      return
    }

    if (FEED_URL_OVERRIDE !== null) {
      const feedUrl = this.normalizeFeedUrl(FEED_URL_OVERRIDE)
      if (!feedUrl) {
        this.publish({ state: 'error', message: '更新源地址不合法或不是 HTTPS', updatedAt: Date.now() })
        return
      }
      autoUpdater.setFeedURL({ provider: 'generic', url: feedUrl })
      logger.info('updater', '使用环境变量指定的更新源', { feedUrl })
    }

    autoUpdater.autoDownload = false
    autoUpdater.autoInstallOnAppQuit = false
    autoUpdater.allowDowngrade = false
    autoUpdater.allowPrerelease = false

    this.bindEvents()
    this.supported = true
    this.publish({ state: 'idle', message: '可以检查更新', updatedAt: Date.now() })
    logger.info('updater', '自动更新已初始化', { currentVersion: app.getVersion() })
  }

  /** 校验并归一化更新源地址 */
  private normalizeFeedUrl(raw: string): string | null {
    try {
      const url = new URL(raw)
      if (url.protocol === 'https:') return url.toString()
      if (url.protocol === 'http:' && ALLOW_INSECURE_FEED) {
        logger.warn('updater', '使用了明文 HTTP 更新源，仅限本地联调')
        return url.toString()
      }
      return null
    } catch {
      return null
    }
  }

  private bindEvents(): void {
    autoUpdater.on('checking-for-update', () => {
      this.publish({ state: 'checking', message: '正在检查更新…', updatedAt: Date.now() })
    })

    autoUpdater.on('update-available', (info: UpdateInfo) => {
      // 完整性前置校验：没有 sha512 的更新包一律拒绝
      const files = info.files ?? []
      const integrityOk = files.length > 0 && files.every((file) => typeof file.sha512 === 'string' && file.sha512.length > 0)
      if (!integrityOk) {
        logger.error('updater', '更新包缺少完整性校验信息，已拒绝', { version: info.version })
        this.publish({ state: 'error', message: '更新包缺少完整性校验信息，已拒绝下载', updatedAt: Date.now() })
        return
      }
      this.publish({
        state: 'available',
        message: `发现新版本 ${info.version}`,
        version: info.version,
        updatedAt: Date.now(),
      })
    })

    autoUpdater.on('update-not-available', () => {
      this.publish({ state: 'not-available', message: '当前已是最新版本', updatedAt: Date.now() })
    })

    autoUpdater.on('download-progress', (progress: DownloadProgressPayload) => {
      this.publish({
        state: 'downloading',
        message: `正在下载 ${progress.percent.toFixed(1)}%`,
        percent: progress.percent,
        transferredBytes: progress.transferred,
        totalBytes: progress.total,
        updatedAt: Date.now(),
      })
    })

    autoUpdater.on('update-downloaded', (info: UpdateInfo) => {
      this.publish({
        state: 'downloaded',
        message: `版本 ${info.version} 已下载完成，重启后生效`,
        version: info.version,
        percent: 100,
        updatedAt: Date.now(),
      })
    })

    autoUpdater.on('error', (error: Error) => {
      logger.error('updater', '自动更新失败', { message: error.message })
      this.publish({ state: 'error', message: '检查或下载更新失败，请稍后重试', updatedAt: Date.now() })
    })
  }

  private publish(status: UpdaterStatus): void {
    this.status = status
    emitToRenderer(IPC_EVENTS.updaterStatus, status)
  }

  private assertSupported(): UpdaterStatus {
    if (!this.supported) {
      return {
        state: 'unsupported',
        message: app.isPackaged ? '自动更新未启用' : '开发环境不检查更新',
        updatedAt: Date.now(),
      }
    }
    return this.status
  }

  /** 触发检查更新，返回当前状态；后续进度通过事件推送 */
  async check(): Promise<UpdaterStatus> {
    const blocked = this.assertSupported()
    if (blocked.state === 'unsupported' || blocked.state === 'error') return blocked
    if (this.status.state === 'checking') return this.status
    await autoUpdater.checkForUpdates()
    return this.status
  }

  /** 下载已发现的更新 */
  async download(): Promise<UpdaterStatus> {
    const blocked = this.assertSupported()
    if (blocked.state === 'unsupported') return blocked
    if (this.status.state !== 'available' && this.status.state !== 'downloading') {
      return blocked
    }
    if (this.status.state === 'downloading') return this.status
    await autoUpdater.downloadUpdate()
    return this.status
  }

  /** 退出并安装已下载的更新 */
  install(): void {
    if (this.status.state !== 'downloaded') {
      logger.warn('updater', '尚未下载更新，忽略安装请求')
      return
    }
    logger.info('updater', '退出并安装更新')
    setImmediate(() => {
      autoUpdater.quitAndInstall(false, true)
    })
  }

  getStatus(): UpdaterStatus {
    return this.status
  }
}

export const updaterService = new UpdaterService()
