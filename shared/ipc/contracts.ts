import { IPC_CHANNELS, IPC_EVENTS } from './channels'

/**
 * 平台标识。
 * 这里不使用 `NodeJS.Platform`，因为渲染进程的类型环境不引入 @types/node。
 */
export type PlatformName = 'darwin' | 'win32' | 'linux' | 'other'

/** 主题模式：跟随系统 / 强制亮色 / 强制暗色 */
export type ThemeMode = 'system' | 'light' | 'dark'

/** 应用基础信息 */
export interface AppInfo {
  name: string
  version: string
  electronVersion: string
  chromeVersion: string
  nodeVersion: string
  platform: PlatformName
  isPackaged: boolean
  locale: string
}

/** 应用使用的关键目录 */
export interface AppPaths {
  userData: string
  logs: string
  home: string
  temp: string
}

/** 系统运行信息 */
export interface SystemInfo {
  platform: PlatformName
  arch: string
  cpuModel: string
  cpuCount: number
  totalMemoryBytes: number
  freeMemoryBytes: number
  hostname: string
  appUptimeSeconds: number
  locale: string
}

/** 打开外部链接的参数 */
export interface OpenExternalPayload {
  url: string
}

/** 文件选择器过滤器 */
export interface FileFilter {
  name: string
  extensions: string[]
}

export interface OpenFileOptions {
  title?: string
  filters?: FileFilter[]
  multiple?: boolean
}

export interface SaveFileOptions {
  title?: string
  defaultPath?: string
  filters?: FileFilter[]
}

export interface OpenFileResult {
  canceled: boolean
  paths: string[]
}

export interface SaveFileResult {
  canceled: boolean
  path: string | null
}

/** 自动更新状态机 */
export type UpdaterState = 'unsupported' | 'idle' | 'checking' | 'available' | 'not-available' | 'downloading' | 'downloaded' | 'error'

export interface UpdaterStatus {
  state: UpdaterState
  message: string
  version?: string
  percent?: number
  transferredBytes?: number
  totalBytes?: number
  updatedAt: number
}

/** 原生菜单下发给渲染进程的导航指令 */
export type MenuCommand = 'navigate:home' | 'navigate:ipc' | 'navigate:settings'

/**
 * 请求参数映射。
 * 以通道常量为键，新增通道时只要在这里补一行，主进程与 preload 会同时获得类型。
 */
export interface IpcRequestMap {
  [IPC_CHANNELS.appInfo]: undefined
  [IPC_CHANNELS.appPaths]: undefined
  [IPC_CHANNELS.appOpenExternal]: OpenExternalPayload
  [IPC_CHANNELS.appQuit]: undefined
  [IPC_CHANNELS.windowMinimize]: undefined
  [IPC_CHANNELS.windowToggleMaximize]: undefined
  [IPC_CHANNELS.windowClose]: undefined
  [IPC_CHANNELS.windowIsMaximized]: undefined
  [IPC_CHANNELS.windowSetTheme]: { theme: ThemeMode }
  [IPC_CHANNELS.dialogOpenFile]: OpenFileOptions
  [IPC_CHANNELS.dialogSaveFile]: SaveFileOptions
  [IPC_CHANNELS.systemInfo]: undefined
  [IPC_CHANNELS.updaterCheck]: undefined
  [IPC_CHANNELS.updaterDownload]: undefined
  [IPC_CHANNELS.updaterInstall]: undefined
}

/** 响应数据映射，与请求映射一一对应 */
export interface IpcResponseMap {
  [IPC_CHANNELS.appInfo]: AppInfo
  [IPC_CHANNELS.appPaths]: AppPaths
  [IPC_CHANNELS.appOpenExternal]: void
  [IPC_CHANNELS.appQuit]: void
  [IPC_CHANNELS.windowMinimize]: void
  [IPC_CHANNELS.windowToggleMaximize]: boolean
  [IPC_CHANNELS.windowClose]: void
  [IPC_CHANNELS.windowIsMaximized]: boolean
  [IPC_CHANNELS.windowSetTheme]: void
  [IPC_CHANNELS.dialogOpenFile]: OpenFileResult
  [IPC_CHANNELS.dialogSaveFile]: SaveFileResult
  [IPC_CHANNELS.systemInfo]: SystemInfo
  [IPC_CHANNELS.updaterCheck]: UpdaterStatus
  [IPC_CHANNELS.updaterDownload]: UpdaterStatus
  [IPC_CHANNELS.updaterInstall]: void
}

/** 推送事件的载荷映射 */
export interface IpcEventMap {
  [IPC_EVENTS.menuCommand]: MenuCommand
  [IPC_EVENTS.updaterStatus]: UpdaterStatus
  [IPC_EVENTS.windowMaximized]: boolean
}
