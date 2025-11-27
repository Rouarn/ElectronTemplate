import type { MenuSection } from '../types'

/**
 * 窗口菜单
 */
export const windowMenu: MenuSection = () => ({
  label: '窗口',
  submenu: [
    { label: '最小化', accelerator: 'CmdOrCtrl+M', role: 'minimize' },
    { label: '关闭', accelerator: 'CmdOrCtrl+W', role: 'close' },
  ],
})
