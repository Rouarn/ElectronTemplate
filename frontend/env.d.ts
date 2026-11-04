/// <reference types="vite/client" />

import type { DesktopBridge } from '@shared/ipc'

interface ImportMetaEnv {
  /** 后端接口基础地址 */
  readonly VITE_API_BASE_URL?: string
  /** 是否启用前端模拟接口（1 表示启用） */
  readonly VITE_USE_MOCK_API?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare global {
  interface Window {
    /** 由 preload 注入；浏览器环境下不存在 */
    electronBridge?: DesktopBridge
  }
}
