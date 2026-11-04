import fs from 'node:fs/promises'
import path from 'node:path'
import { protocol } from 'electron'
import { logger } from './logger'
import { APP_SCHEME, APP_SCHEME_HOST, getRendererDistDir } from './settings'

/** 常见静态资源类型，避免依赖第三方 mime 库 */
const MIME_TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.map': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
}

function mimeFor(filePath: string): string {
  return MIME_TYPES[path.extname(filePath).toLowerCase()] ?? 'application/octet-stream'
}

/**
 * 在 app ready 之前注册特权协议。
 * standard + secure 让它拥有正常的 origin，从而可以使用 CSP 与 fetch。
 */
export function registerAppScheme(): void {
  protocol.registerSchemesAsPrivileged([
    {
      scheme: APP_SCHEME,
      privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true, stream: true },
    },
  ])
}

/**
 * 处理 app:// 请求：从 frontend/dist 读取静态文件。
 * 1. 严格限制在产物目录内，防止路径穿越
 * 2. 未命中的无扩展名路径回退到 index.html，支持前端路由
 */
export function registerAppProtocol(): void {
  const root = path.resolve(getRendererDistDir())

  protocol.handle(APP_SCHEME, async (request) => {
    let filePath = ''
    try {
      const url = new URL(request.url)
      if (url.host !== APP_SCHEME_HOST) return new Response('未找到资源', { status: 404 })

      const decodedPath = decodeURIComponent(url.pathname)
      const relativePath = decodedPath === '/' ? '/index.html' : decodedPath
      const resolved = path.resolve(root, `.${relativePath}`)

      if (!resolved.startsWith(`${root}${path.sep}`)) {
        logger.warn('protocol', '已拦截疑似路径穿越请求', decodedPath)
        return new Response('禁止访问', { status: 403 })
      }

      filePath = resolved
      try {
        await fs.access(filePath)
      } catch {
        if (path.extname(filePath) !== '') return new Response('未找到资源', { status: 404 })
        filePath = path.join(root, 'index.html')
      }

      const content = await fs.readFile(filePath)
      return new Response(content, {
        headers: { 'content-type': mimeFor(filePath) },
      })
    } catch (error) {
      logger.error('protocol', '读取静态资源失败', { filePath, error })
      return new Response('服务内部错误', { status: 500 })
    }
  })

  logger.info('protocol', 'app:// 协议已注册', { root })
}
