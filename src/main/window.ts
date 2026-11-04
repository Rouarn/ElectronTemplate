import path from 'node:path'
import { BrowserWindow, nativeTheme } from 'electron'
import { IPC_EVENTS, type IpcEvent, type IpcEventMap } from '@shared/ipc'
import { logger } from './logger'
import { APP_ORIGIN, DEVTOOLS_ALLOWED, RENDERER_DEV_URL } from './settings'
import { getInitialBounds, shouldStartMaximized, trackWindow } from './window-state'

let mainWindow: BrowserWindow | null = null

export function getMainWindow(): BrowserWindow | null {
  return mainWindow
}

/** 向主窗口推送事件，窗口不存在时静默丢弃，避免启动早期空指针 */
export function emitToRenderer<E extends IpcEvent>(event: E, payload: IpcEventMap[E]): void {
  if (!mainWindow || mainWindow.isDestroyed()) return
  mainWindow.webContents.send(event, payload)
}

export function createMainWindow(): BrowserWindow {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.show()
    return mainWindow
  }

  const bounds = getInitialBounds()
  const win = new BrowserWindow({
    width: bounds.width,
    height: bounds.height,
    ...(bounds.x !== undefined && bounds.y !== undefined ? { x: bounds.x, y: bounds.y } : {}),
    minWidth: 960,
    minHeight: 600,
    show: false,
    title: 'Electron 桌面模板',
    backgroundColor: nativeTheme.shouldUseDarkColors ? '#101014' : '#f7f8fa',
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.cjs'),
      // 安全基线：逐项显式声明，不依赖 Electron 的默认值
      contextIsolation: true,
      sandbox: true,
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
      nodeIntegrationInSubFrames: false,
      webSecurity: true,
      allowRunningInsecureContent: false,
      experimentalFeatures: false,
      webviewTag: false,
      spellcheck: false,
      safeDialogs: true,
      navigateOnDragDrop: false,
      devTools: DEVTOOLS_ALLOWED,
    },
  })

  mainWindow = win
  trackWindow(win)

  win.once('ready-to-show', () => {
    if (shouldStartMaximized()) win.maximize()
    win.show()
    logger.info('window', '主窗口已显示')
  })

  win.on('maximize', () => emitToRenderer(IPC_EVENTS.windowMaximized, true))
  win.on('unmaximize', () => emitToRenderer(IPC_EVENTS.windowMaximized, false))
  win.on('closed', () => {
    mainWindow = null
  })

  // 开发环境走 Vite dev server，生产环境走 app:// 本地文件
  const rendererUrl = RENDERER_DEV_URL ?? `${APP_ORIGIN}/index.html`
  win.loadURL(rendererUrl).catch((error: unknown) => {
    logger.error('window', '加载渲染页面失败', { rendererUrl, error })
  })

  return win
}

/** 第二次启动或点击 Dock 图标时聚焦已有窗口 */
export function focusMainWindow(): void {
  if (!mainWindow || mainWindow.isDestroyed()) {
    createMainWindow()
    return
  }
  if (mainWindow.isMinimized()) mainWindow.restore()
  mainWindow.show()
  mainWindow.focus()
}
