import path from 'node:path'
import { app } from 'electron'

/** 生产环境使用的自定义协议，避免 file:// 带来的 origin 与 CSP 语义问题 */
export const APP_SCHEME = 'app'
export const APP_SCHEME_HOST = 'bundle'
export const APP_ORIGIN = `${APP_SCHEME}://${APP_SCHEME_HOST}`

/** 开发环境由 scripts/dev.mjs 注入渲染进程地址 */
export const RENDERER_DEV_URL = process.env.ELECTRON_RENDERER_URL ?? null
export const IS_DEV = RENDERER_DEV_URL !== null

/** 允许开启开发者工具的条件：开发环境，或显式设置环境变量 */
export const DEVTOOLS_ALLOWED = IS_DEV || process.env.ELECTRON_ENABLE_DEVTOOLS === '1'

/** 渲染产物目录（打包后位于 asar 内的 frontend/dist） */
export function getRendererDistDir(): string {
  return path.join(app.getAppPath(), 'frontend', 'dist')
}

/** 导航白名单：只允许停留在自身页面 */
export function getAllowedOrigins(): string[] {
  const origins = [APP_ORIGIN]
  if (RENDERER_DEV_URL) {
    try {
      origins.push(new URL(RENDERER_DEV_URL).origin)
    } catch {
      // 注入地址非法时直接忽略，后续加载会失败并暴露问题
    }
  }
  return origins
}

/** 判断地址是否属于白名单 */
export function isAllowedNavigation(rawUrl: string): boolean {
  try {
    const parsed = new URL(rawUrl)
    // 自定义协议在 Node 的 URL 实现中 origin 为 "null"，因此按协议 + 主机名比较
    if (parsed.protocol === `${APP_SCHEME}:` && parsed.host === APP_SCHEME_HOST) return true
    if (!RENDERER_DEV_URL) return false
    return parsed.origin === new URL(RENDERER_DEV_URL).origin
  } catch {
    return false
  }
}
