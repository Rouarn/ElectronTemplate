import { isMac } from '../platform'
import type { MenuSection } from '../types'
import { app } from 'electron'

/**
 * 文件菜单
 */
export const fileMenu: MenuSection = (_win) => ({
  label: '文件',
  submenu: [
    {
      label: '退出',
      accelerator: isMac ? 'Command+Q' : 'Alt+F4',
      click: () => app.quit(),
    },
  ],
})
