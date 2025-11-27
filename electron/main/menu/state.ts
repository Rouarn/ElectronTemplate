import { BrowserWindow, Menu } from 'electron'

function pickWC(w?: Electron.CrossProcessExports.BrowserWindow): Electron.WebContents | null {
  if (w && !w.isDestroyed()) return w.webContents
  const focused = BrowserWindow.getFocusedWindow()
  if (focused) return focused.webContents
  const all = BrowserWindow.getAllWindows()
  if (all.length > 0) return all[0].webContents
  return null
}

export function setupNavState(win?: Electron.CrossProcessExports.BrowserWindow): void {
  const refresh = () => {
    const m = Menu.getApplicationMenu()
    if (!m) return
    const wc = pickWC(win)
    const back = m.getMenuItemById('view-back')
    const forward = m.getMenuItemById('view-forward')
    const canBack = wc ? wc.canGoBack() : false
    const canForward = wc ? wc.canGoForward() : false
    if (back) back.enabled = canBack
    if (forward) forward.enabled = canForward
  }
  refresh()
  const wcForEvents = pickWC(win)
  if (wcForEvents) {
    wcForEvents.on('did-navigate', refresh)
    wcForEvents.on('did-navigate-in-page', refresh)
    wcForEvents.on('did-finish-load', refresh)
  }
}
