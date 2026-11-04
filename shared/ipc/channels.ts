/**
 * IPC 通道唯一来源。
 *
 * 主进程、preload、渲染进程（含浏览器降级实现）都必须从这里引用通道名，
 * 禁止在任何地方手写字符串字面量。
 */

/** 渲染进程 → 主进程的 invoke 通道 */
export const IPC_CHANNELS = {
  appInfo: 'app:info',
  appPaths: 'app:paths',
  appOpenExternal: 'app:open-external',
  appQuit: 'app:quit',
  appReportError: 'app:report-error',
  windowMinimize: 'window:minimize',
  windowToggleMaximize: 'window:toggle-maximize',
  windowClose: 'window:close',
  windowIsMaximized: 'window:is-maximized',
  windowSetTheme: 'window:set-theme',
  dialogOpenFile: 'dialog:open-file',
  dialogSaveFile: 'dialog:save-file',
  systemInfo: 'system:info',
  updaterCheck: 'updater:check',
  updaterDownload: 'updater:download',
  updaterInstall: 'updater:install',
} as const

export type IpcChannel = (typeof IPC_CHANNELS)[keyof typeof IPC_CHANNELS]

/** 主进程注册与 preload 白名单都使用该列表，新增通道只需改动上面的常量 */
export const IPC_CHANNEL_LIST: readonly IpcChannel[] = Object.values(IPC_CHANNELS)

/** 主进程 → 渲染进程的单向推送事件 */
export const IPC_EVENTS = {
  menuCommand: 'event:menu-command',
  updaterStatus: 'event:updater-status',
  windowMaximized: 'event:window-maximized',
} as const

export type IpcEvent = (typeof IPC_EVENTS)[keyof typeof IPC_EVENTS]

export const IPC_EVENT_LIST: readonly IpcEvent[] = Object.values(IPC_EVENTS)
