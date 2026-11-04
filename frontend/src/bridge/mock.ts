import { BridgeError, IPC_ERROR_CODES, type DesktopBridge, type ThemeMode, type UpdaterStatus } from '@shared/ipc'

/** 模拟网络/主进程延迟，让浏览器环境的交互节奏接近真实桌面端 */
function delay(ms = 180): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

function createStatus(state: UpdaterStatus['state'], message: string, extra: Partial<UpdaterStatus> = {}): UpdaterStatus {
  return { state, message, updatedAt: Date.now(), ...extra }
}

/**
 * 浏览器环境降级实现。
 * 渲染层通过同一份 DesktopBridge 接口消费，因此在纯浏览器中打开也不会崩溃，
 * 但会明确提示「当前不在 Electron 环境中」。
 */
export function createMockBridge(): DesktopBridge {
  const updaterListeners = new Set<(status: UpdaterStatus) => void>()
  const maximizeListeners = new Set<(maximized: boolean) => void>()
  let maximized = false
  let currentStatus = createStatus('idle', '浏览器预览模式：更新功能不可用')

  const publishStatus = (status: UpdaterStatus): void => {
    currentStatus = status
    for (const listener of updaterListeners) listener(status)
  }

  const navigatorWithMemory = navigator as Navigator & { deviceMemory?: number }

  return {
    runtime: {
      isElectron: false,
      platform: 'other',
    },

    app: {
      getInfo: async () => {
        await delay()
        return {
          name: 'Electron 桌面模板',
          version: '1.0.0（浏览器预览）',
          electronVersion: '不可用',
          chromeVersion: navigator.userAgent.match(/Chrome\/([\d.]+)/)?.[1] ?? '不可用',
          nodeVersion: '不可用',
          platform: 'other',
          isPackaged: false,
          locale: navigator.language,
        }
      },
      getPaths: async () => {
        await delay()
        return {
          userData: '（浏览器环境无 userData 目录）',
          logs: '（浏览器环境无日志目录）',
          home: '（浏览器环境无主目录）',
          temp: '（浏览器环境无临时目录）',
        }
      },
      openExternal: async ({ url }) => {
        await delay(60)
        window.open(url, '_blank', 'noopener,noreferrer')
      },
      quit: async () => {
        throw new BridgeError({ code: IPC_ERROR_CODES.unsupported, message: '浏览器环境不支持退出应用' })
      },
      reportError: async (payload) => {
        // 浏览器预览没有主进程日志，直接输出到控制台
        console.error('[renderer:error]', payload)
      },
    },

    window: {
      minimize: async () => {
        await delay(60)
      },
      toggleMaximize: async () => {
        await delay(60)
        maximized = !maximized
        for (const listener of maximizeListeners) listener(maximized)
        return maximized
      },
      close: async () => {
        throw new BridgeError({ code: IPC_ERROR_CODES.unsupported, message: '浏览器环境不支持关闭窗口' })
      },
      isMaximized: async () => maximized,
      setTheme: async (_theme: ThemeMode) => {
        // 浏览器中主题由前端 class 控制，这里无需额外处理
      },
      onMaximizedChange: (listener) => {
        maximizeListeners.add(listener)
        return () => {
          maximizeListeners.delete(listener)
        }
      },
    },

    dialog: {
      openFile: async () => {
        await delay()
        return { canceled: true, paths: [] }
      },
      saveFile: async () => {
        await delay()
        return { canceled: true, path: null }
      },
    },

    system: {
      getInfo: async () => {
        await delay()
        const deviceMemoryGb = navigatorWithMemory.deviceMemory ?? 8
        return {
          platform: 'other',
          arch: '浏览器沙箱',
          cpuModel: '浏览器环境不暴露 CPU 型号',
          cpuCount: navigator.hardwareConcurrency ?? 4,
          totalMemoryBytes: deviceMemoryGb * 1024 ** 3,
          freeMemoryBytes: Number.NaN,
          hostname: window.location.hostname || 'localhost',
          appUptimeSeconds: Math.round(performance.now() / 1000),
          locale: navigator.language,
        }
      },
    },

    updater: {
      check: async () => {
        publishStatus(createStatus('checking', '正在检查更新…'))
        await delay(600)
        publishStatus(createStatus('not-available', '浏览器预览模式：当前已是最新版本'))
        return currentStatus
      },
      download: async () => {
        throw new BridgeError({ code: IPC_ERROR_CODES.unsupported, message: '浏览器环境不支持下载更新' })
      },
      install: async () => {
        throw new BridgeError({ code: IPC_ERROR_CODES.unsupported, message: '浏览器环境不支持安装更新' })
      },
      onStatus: (listener) => {
        updaterListeners.add(listener)
        return () => {
          updaterListeners.delete(listener)
        }
      },
    },

    menu: {
      onCommand: () => () => {
        // 浏览器环境没有原生菜单
      },
    },
  }
}
