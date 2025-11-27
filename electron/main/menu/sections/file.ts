import { icons } from '../icons'
import { isMac } from '../platform'
import type { MenuSection } from '../types'
import { safelySendToRenderer } from '../utils'
import { app } from 'electron'

/**
 * 文件菜单
 */
export const fileMenu: MenuSection = (win) => ({
  label: '文件',
  submenu: [
    {
      label: '检查更新',
      icon: icons.menu,
      accelerator: 'CmdOrCtrl+U',
      click: () => safelySendToRenderer(win, 'menuCheckUpdate'),
    },
    { type: 'separator' },
    {
      label: '退出',
      accelerator: isMac ? 'Command+Q' : 'Alt+F4',
      click: () => app.quit(),
    },
  ],
})
