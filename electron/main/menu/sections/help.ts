import { icons } from '../icons'
import type { MenuSection } from '../types'
import { safelySendToRenderer, safelyToggleDevTools } from '../utils'
import { shell } from 'electron'

/**
 * 帮助菜单
 */
export const helpMenu: MenuSection = (win) => ({
  label: '帮助',
  submenu: [
    {
      label: '关于',
      click: () => safelySendToRenderer(win, 'menuAbout'),
    },
    {
      label: '开发者工具',
      accelerator: 'CmdOrCtrl+Shift+I',
      icon: icons.devtools,
      click: () => safelyToggleDevTools(win),
    },
    { type: 'separator' },
    {
      label: '访问官网',
      icon: icons.website,
      click: async () => {
        await shell.openExternal('https://github.com/Rouarn/Electron-template')
      },
    },
  ],
})
