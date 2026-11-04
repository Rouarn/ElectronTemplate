import { ref } from 'vue'
import { defineStore } from 'pinia'
import { isBridgeError, type AppInfo, type IpcErrorCode, type IpcErrorPayload, type SystemInfo } from '@shared/ipc'
import { getDesktopBridge } from '@/bridge'

/** 把任意异常统一成 IPC 错误结构，供界面展示 */
export function toIpcError(value: unknown): IpcErrorPayload {
  if (isBridgeError(value)) return { code: value.code, message: value.message }
  if (value instanceof Error) return { code: 'INTERNAL', message: value.message }
  return { code: 'INTERNAL', message: '未知错误' } satisfies { code: IpcErrorCode; message: string }
}

/**
 * 运行环境信息。
 * 所有数据都通过类型化 bridge 获取，浏览器环境自动走 mock。
 */
export const useRuntimeStore = defineStore('runtime', () => {
  const bridge = getDesktopBridge()

  const appInfo = ref<AppInfo | null>(null)
  const systemInfo = ref<SystemInfo | null>(null)
  const loadingAppInfo = ref(false)
  const loadingSystemInfo = ref(false)
  const lastError = ref<IpcErrorPayload | null>(null)

  async function loadAppInfo(): Promise<void> {
    loadingAppInfo.value = true
    try {
      appInfo.value = await bridge.app.getInfo()
      lastError.value = null
    } catch (error) {
      lastError.value = toIpcError(error)
    } finally {
      loadingAppInfo.value = false
    }
  }

  async function loadSystemInfo(): Promise<void> {
    loadingSystemInfo.value = true
    try {
      systemInfo.value = await bridge.system.getInfo()
      lastError.value = null
    } catch (error) {
      lastError.value = toIpcError(error)
    } finally {
      loadingSystemInfo.value = false
    }
  }

  function clearError(): void {
    lastError.value = null
  }

  return {
    appInfo,
    systemInfo,
    loadingAppInfo,
    loadingSystemInfo,
    lastError,
    loadAppInfo,
    loadSystemInfo,
    clearError,
  }
})
