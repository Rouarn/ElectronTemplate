import { IpcChannel } from '../../constant/ipc'
import { getMainWindow, setCloseAndQuit } from 'ee-core/electron'
import { logger } from 'ee-core/log'
import { is } from 'ee-core/utils'
import { app as electronApp } from 'electron'
import { autoUpdater } from 'electron-updater'

/**
 * 自动更新服务类
 */
class AppUpdaterService {
  private config: {
    windows: boolean
    macOS: boolean
    linux: boolean
    options: {
      provider: 'generic'
      url: string
    }
    force: boolean
    autoDownload: boolean
  }

  constructor() {
    this.config = {
      windows: true,
      macOS: true,
      linux: false,
      options: {
        provider: 'generic',
        url: 'http://static.shixian.xyz/static/electron-template/',
      },
      force: false,
      autoDownload: false,
    }
  }

  /**
   * 创建并配置自动更新器
   */
  create(): void {
    logger.info('[autoUpdater] load')
    const cfg = this.config
    if ((is.windows() && cfg.windows) || (is.macOS() && cfg.macOS) || (is.linux() && cfg.linux)) {
      // 继续
    } else {
      return
    }

    // 开发环境强制开启更新检查 (可选，根据需要开启)
    if (!electronApp.isPackaged) {
      autoUpdater.forceDevUpdateConfig = true
      // 开发环境下，由于未打包，通常需要指定 dev-app-update.yml 路径或者手动设置
      logger.info('[autoUpdater] Development mode: forceDevUpdateConfig = true')
    }

    const status = {
      error: -1,
      available: 1,
      noAvailable: 2,
      downloading: 3,
      downloaded: 4,
    }

    const version = electronApp.getVersion()
    logger.info('[autoUpdater] Current version: ', version)

    // 设置下载服务器地址
    let server = cfg.options.url
    const lastChar = server.substring(server.length - 1)
    server = lastChar === '/' ? server : `${server}/`
    cfg.options.url = server

    try {
      autoUpdater.setFeedURL(cfg.options)
    } catch (error) {
      logger.error('[autoUpdater] setFeedURL error : ', error)
    }

    // 手动控制下载，不在检测到更新后自动下载
    autoUpdater.autoDownload = cfg.autoDownload

    autoUpdater.on('checking-for-update', () => {
      // this.sendStatusToWindow('正在检查更新...');
      logger.info('[autoUpdater] checking-for-update')
    })

    autoUpdater.on('update-available', (info) => {
      logger.info('[autoUpdater] update-available: ', info)
      const data = {
        status: status.available,
        desc: '有可用更新',
      }
      this.sendStatusToWindow(data)
    })

    autoUpdater.on('update-not-available', (info) => {
      logger.info('[autoUpdater] update-not-available: ', info)
      const data = {
        status: status.noAvailable,
        desc: '没有可用更新',
      }
      this.sendStatusToWindow(data)
    })

    autoUpdater.on('error', (err) => {
      logger.error('[autoUpdater] error: ', err)
      const data = {
        status: status.error,
        desc: `检查更新出错: ${err}`,
      }
      this.sendStatusToWindow(data)
    })

    autoUpdater.on('download-progress', (progressObj) => {
      const percentNumber = progressObj.percent
      const totalSize = this.bytesChange(progressObj.total)
      const transferredSize = this.bytesChange(progressObj.transferred)
      let text = `已下载 ${percentNumber.toFixed(2)}%`
      text = `${text} (${transferredSize}/${totalSize})`

      const data = {
        status: status.downloading,
        desc: text,
        percentNumber,
        totalSize,
        transferredSize,
      }
      // logger.info('[addon:autoUpdater] progress: ', text); // 减少日志
      this.sendStatusToWindow(data)
    })

    autoUpdater.on('update-downloaded', (info) => {
      logger.info('[autoUpdater] update-downloaded: ', info)
      const data = {
        status: status.downloaded,
        desc: '下载完成',
      }
      this.sendStatusToWindow(data)

      // 注意：这里不再自动调用 quitAndInstall，而是等待用户确认
      // setCloseAndQuit(true);
      // autoUpdater.quitAndInstall();
    })
  }

  /**
   * 检查更新
   */
  checkUpdate(): void {
    autoUpdater.checkForUpdates()
  }

  /**
   * 下载更新
   */
  download(): void {
    autoUpdater.downloadUpdate()
  }

  /**
   * 退出并安装更新
   */
  quitAndInstall(): void {
    setCloseAndQuit(true)
    autoUpdater.quitAndInstall()
  }

  /**
   * 发送状态到前端
   */
  sendStatusToWindow(content: Record<string, unknown> = {}): void {
    const textJson = JSON.stringify(content)
    const channel = IpcChannel.AppUpdater.Status
    const win = getMainWindow()

    if (win) {
      win.webContents.send(channel, textJson)
    }
  }

  /**
   * 字节转换
   */
  bytesChange(limit: number): string {
    let size = ''
    if (limit < 0.1 * 1024) {
      size = `${limit.toFixed(2)}B`
    } else if (limit < 0.1 * 1024 * 1024) {
      size = `${(limit / 1024).toFixed(2)}KB`
    } else if (limit < 0.1 * 1024 * 1024 * 1024) {
      size = `${(limit / (1024 * 1024)).toFixed(2)}MB`
    } else {
      size = `${(limit / (1024 * 1024 * 1024)).toFixed(2)}GB`
    }

    const sizeStr = `${size}`
    const index = sizeStr.indexOf('.')
    const dou = sizeStr.substring(index + 1, index + 3)
    if (dou === '00') {
      return sizeStr.substring(0, index) + sizeStr.substring(index + 3, index + 5)
    }

    return size
  }
}

AppUpdaterService.toString = () => '[class AppUpdaterService]'
const appUpdaterService = new AppUpdaterService()

export { AppUpdaterService, appUpdaterService }
