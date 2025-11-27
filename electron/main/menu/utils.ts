import { BrowserWindow } from 'electron'

/**
 * 选择一个可用的 WebContents：
 * 1) 优先使用传入窗口（未销毁）
 * 2) 其次使用当前焦点窗口
 * 3) 最后使用第一个已存在的窗口
 */
function pickWebContents(win?: Electron.CrossProcessExports.BrowserWindow): Electron.WebContents | null {
  if (win && !win.isDestroyed()) return win.webContents
  const focused = BrowserWindow.getFocusedWindow()
  if (focused) return focused.webContents
  const all = BrowserWindow.getAllWindows()
  if (all.length > 0) return all[0].webContents
  return null
}

/**
 * 安全地向渲染进程发送消息
 * - 无窗口时输出提示，不抛错
 */
export function safelySendToRenderer(win: Electron.CrossProcessExports.BrowserWindow | undefined, channel: string, ...args: unknown[]) {
  const wc = pickWebContents(win)
  if (!wc) {
    console.log(`无法发送 ${channel} 消息：没有可用的窗口`)
    return
  }
  wc.send(channel, ...args)
}

/**
 * 安全地切换开发者工具
 * - 无窗口时输出提示，不抛错
 */
export function safelyToggleDevTools(win: Electron.CrossProcessExports.BrowserWindow | undefined) {
  const wc = pickWebContents(win)
  if (!wc) {
    console.log('无法打开开发者工具：没有可用的窗口')
    return
  }
  wc.toggleDevTools()
}

/**
 * 安全后退：存在可后退历史才执行
 */
export function safeGoBack(win: Electron.CrossProcessExports.BrowserWindow | undefined) {
  const wc = pickWebContents(win)
  if (!wc) {
    console.log('无法后退：没有可用的窗口')
    return
  }
  if (wc.canGoBack()) wc.goBack()
  else console.log('无法后退：当前没有历史记录')
}

/**
 * 安全前进：存在可前进历史才执行
 */
export function safeGoForward(win: Electron.CrossProcessExports.BrowserWindow | undefined) {
  const wc = pickWebContents(win)
  if (!wc) {
    console.log('无法前进：没有可用的窗口')
    return
  }
  if (wc.canGoForward()) wc.goForward()
  else console.log('无法前进：当前没有历史记录')
}
