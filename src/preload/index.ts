import { contextBridge, ipcRenderer, type IpcRendererEvent } from 'electron'
import {
  BridgeError,
  IPC_CHANNELS,
  IPC_ERROR_CODES,
  IPC_EVENT_LIST,
  IPC_EVENTS,
  type DesktopBridge,
  type IpcChannel,
  type IpcEvent,
  type IpcEventMap,
  type IpcRequestMap,
  type IpcResponseMap,
  type IpcResult,
  type PlatformName,
  type Unsubscribe,
} from '@shared/ipc'

/** 只允许订阅这里登记过的事件，避免桥接层被当作任意事件总线 */
const EVENT_WHITELIST = new Set<string>(IPC_EVENT_LIST)

function platformName(): PlatformName {
  if (process.platform === 'darwin') return 'darwin'
  if (process.platform === 'win32') return 'win32'
  if (process.platform === 'linux') return 'linux'
  return 'other'
}

/**
 * 统一的 invoke 封装：
 * 1. 只接受已登记的通道
 * 2. 主进程返回 { ok, data } / { ok, error } 结构
 * 3. 失败时抛出 BridgeError，渲染层可据此区分错误码
 */
async function invoke<C extends IpcChannel>(channel: C, payload: IpcRequestMap[C]): Promise<IpcResponseMap[C]> {
  let raw: unknown
  try {
    raw = await ipcRenderer.invoke(channel, payload)
  } catch {
    throw new BridgeError({ code: IPC_ERROR_CODES.internal, message: '主进程未响应请求' })
  }

  const result = raw as IpcResult<IpcResponseMap[C]> | null
  if (typeof result !== 'object' || result === null || typeof result.ok !== 'boolean') {
    throw new BridgeError({ code: IPC_ERROR_CODES.internal, message: '主进程返回了非预期的结果' })
  }
  if (!result.ok) throw new BridgeError(result.error)
  return result.data
}

function subscribe<E extends IpcEvent>(event: E, listener: (payload: IpcEventMap[E]) => void): Unsubscribe {
  if (!EVENT_WHITELIST.has(event)) {
    throw new BridgeError({ code: IPC_ERROR_CODES.invalidArgument, message: '未登记的事件通道' })
  }
  const handler = (_event: IpcRendererEvent, payload: IpcEventMap[E]) => listener(payload)
  ipcRenderer.on(event, handler)
  return () => {
    ipcRenderer.removeListener(event, handler)
  }
}

/**
 * 暴露给渲染进程的最小能力集。
 * 这里不暴露 ipcRenderer 本身，渲染进程无法调用未登记的通道。
 */
const bridge: DesktopBridge = {
  runtime: {
    isElectron: true,
    platform: platformName(),
  },
  app: {
    getInfo: () => invoke(IPC_CHANNELS.appInfo, undefined),
    getPaths: () => invoke(IPC_CHANNELS.appPaths, undefined),
    openExternal: (payload) => invoke(IPC_CHANNELS.appOpenExternal, payload),
    quit: () => invoke(IPC_CHANNELS.appQuit, undefined),
    reportError: (payload) => invoke(IPC_CHANNELS.appReportError, payload),
  },
  window: {
    minimize: () => invoke(IPC_CHANNELS.windowMinimize, undefined),
    toggleMaximize: () => invoke(IPC_CHANNELS.windowToggleMaximize, undefined),
    close: () => invoke(IPC_CHANNELS.windowClose, undefined),
    isMaximized: () => invoke(IPC_CHANNELS.windowIsMaximized, undefined),
    setTheme: (theme) => invoke(IPC_CHANNELS.windowSetTheme, { theme }),
    onMaximizedChange: (listener) => subscribe(IPC_EVENTS.windowMaximized, listener),
  },
  dialog: {
    openFile: (options) => invoke(IPC_CHANNELS.dialogOpenFile, options ?? {}),
    saveFile: (options) => invoke(IPC_CHANNELS.dialogSaveFile, options ?? {}),
  },
  system: {
    getInfo: () => invoke(IPC_CHANNELS.systemInfo, undefined),
  },
  updater: {
    check: () => invoke(IPC_CHANNELS.updaterCheck, undefined),
    download: () => invoke(IPC_CHANNELS.updaterDownload, undefined),
    install: () => invoke(IPC_CHANNELS.updaterInstall, undefined),
    onStatus: (listener) => subscribe(IPC_EVENTS.updaterStatus, listener),
  },
  menu: {
    onCommand: (listener) => subscribe(IPC_EVENTS.menuCommand, listener),
  },
}

contextBridge.exposeInMainWorld('electronBridge', bridge)
