import { icons } from '../icons'
import { isMac } from '../platform'
import type { MenuSection } from '../types'
import { safeGoBack, safeGoForward } from '../utils'

/**
 * 视图菜单
 */
export const viewMenu: MenuSection = (win) => ({
  label: '视图',
  submenu: [
    {
      label: '后退',
      icon: icons.back,
      accelerator: isMac ? 'CmdOrCtrl+[' : 'Alt+Left',
      click: () => safeGoBack(win),
    },
    {
      label: '前进',
      icon: icons.forward,
      accelerator: isMac ? 'CmdOrCtrl+]' : 'Alt+Right',
      click: () => safeGoForward(win),
    },
    { label: '重新加载', accelerator: 'CmdOrCtrl+R', role: 'reload' },
    { label: '强制重新加载', accelerator: 'CmdOrCtrl+Shift+R', role: 'forceReload' },
    { type: 'separator' },
    { label: '实际大小', accelerator: 'CmdOrCtrl+0', role: 'resetZoom' },
    { label: '放大', accelerator: 'CmdOrCtrl+Plus', role: 'zoomIn' },
    { label: '缩小', accelerator: 'CmdOrCtrl+-', role: 'zoomOut' },
    { type: 'separator' },
    { label: '切换全屏', accelerator: 'F11', role: 'togglefullscreen' },
  ],
})
