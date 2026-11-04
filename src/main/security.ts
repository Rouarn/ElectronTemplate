import { shell, type Session, type WebContents } from 'electron'
import { logger } from './logger'
import { getAllowedOrigins, IS_DEV, isAllowedNavigation } from './settings'

/** 生产环境 CSP：禁止内联脚本、禁止 object/embed、禁止被嵌套 */
const PRODUCTION_CSP = [
  "default-src 'none'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https:",
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'none'",
  "form-action 'none'",
  "frame-ancestors 'none'",
].join('; ')

/** 开发环境额外放开 HMR 所需的 websocket 与内联脚本 */
const DEVELOPMENT_CSP = [
  "default-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' ws: http: https:",
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'none'",
  "form-action 'none'",
  "frame-ancestors 'none'",
].join('; ')

const ALLOWED_EXTERNAL_PROTOCOLS = new Set(['https:', 'http:', 'mailto:'])

/**
 * 安全地打开外部链接。
 * 只允许 https / http / mailto，其余协议（file:、javascript:、data: 等）一律拒绝。
 */
export async function openExternalSafely(rawUrl: string): Promise<void> {
  let parsed: URL
  try {
    parsed = new URL(rawUrl)
  } catch {
    logger.warn('security', '拒绝打开非法链接', rawUrl)
    return
  }
  if (!ALLOWED_EXTERNAL_PROTOCOLS.has(parsed.protocol)) {
    logger.warn('security', '拒绝打开不被允许的协议', parsed.protocol)
    return
  }
  try {
    await shell.openExternal(parsed.toString())
  } catch (error) {
    logger.error('security', '打开外部链接失败', error)
  }
}

/**
 * 会话级安全策略：
 * 1. 权限请求默认全部拒绝，仅放行剪贴板写入（复制功能需要）
 * 2. 统一注入 CSP
 * 3. 关闭拼写检查，避免把输入内容发往第三方服务
 */
export function applySessionSecurity(session: Session): void {
  session.setPermissionRequestHandler((_webContents, permission, callback) => {
    callback(permission === 'clipboard-sanitized-write')
  })

  session.setPermissionCheckHandler((_webContents, permission) => permission === 'clipboard-sanitized-write')

  session.setSpellCheckerEnabled(false)

  session.webRequest.onHeadersReceived((details, callback) => {
    const headers: Record<string, string[]> = {}
    for (const [key, value] of Object.entries(details.responseHeaders ?? {})) {
      if (value !== undefined) headers[key] = value
    }
    headers['Content-Security-Policy'] = [IS_DEV ? DEVELOPMENT_CSP : PRODUCTION_CSP]
    headers['X-Content-Type-Options'] = ['nosniff']
    callback({ responseHeaders: headers })
  })

  logger.info('security', '会话安全策略已启用', { csp: IS_DEV ? 'development' : 'production' })
}

/**
 * 逐个 webContents 加固：
 * - 新窗口一律拦截，改为外部浏览器打开
 * - 站外跳转一律拦截
 * - 禁用 webview
 * - 生产环境一旦打开开发者工具立即关闭
 */
export function hardenWebContents(contents: WebContents): void {
  contents.setWindowOpenHandler(({ url }) => {
    void openExternalSafely(url)
    return { action: 'deny' }
  })

  contents.on('will-navigate', (event, url) => {
    if (!isAllowedNavigation(url)) {
      event.preventDefault()
      logger.warn('security', '已拦截越权导航', url)
    }
  })

  contents.on('will-redirect', (event, url) => {
    if (!isAllowedNavigation(url)) {
      event.preventDefault()
      logger.warn('security', '已拦截越权重定向', url)
    }
  })

  contents.on('will-attach-webview', (event) => {
    event.preventDefault()
    logger.warn('security', '已拦截 webview 挂载')
  })

  contents.on('devtools-opened', () => {
    if (!IS_DEV && process.env.ELECTRON_ENABLE_DEVTOOLS !== '1') {
      contents.closeDevTools()
      logger.warn('security', '生产环境已强制关闭开发者工具')
    }
  })
}

/** 启动时打印一次安全基线，便于自检与审计 */
export function logSecurityBaseline(): void {
  logger.info('security', '安全基线', {
    contextIsolation: true,
    sandbox: true,
    nodeIntegration: false,
    webviewTag: false,
    allowedOrigins: getAllowedOrigins(),
  })
}
