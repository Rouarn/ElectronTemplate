import type { DesktopBridge } from '@shared/ipc'
import { createMockBridge } from './mock'

let cached: DesktopBridge | null = null

/**
 * 获取桌面桥接实例。
 * Electron 环境下使用 preload 注入的实现，纯浏览器环境自动降级为 mock，
 * 业务代码无需关心运行环境。
 */
export function getDesktopBridge(): DesktopBridge {
  if (cached) return cached
  cached = window.electronBridge ?? createMockBridge()
  return cached
}

/** 是否运行在 Electron 容器中 */
export function isElectronRuntime(): boolean {
  return typeof window !== 'undefined' && window.electronBridge !== undefined
}
