import type { MenuSection } from '../types'

/**
 * 编辑菜单
 */
export const editMenu: MenuSection = () => ({
  label: '编辑',
  submenu: [
    { label: '撤销', accelerator: 'CmdOrCtrl+Z', role: 'undo' },
    { label: '重做', accelerator: 'CmdOrCtrl+Y', role: 'redo' },
    { type: 'separator' },
    { label: '剪切', accelerator: 'CmdOrCtrl+X', role: 'cut' },
    { label: '复制', accelerator: 'CmdOrCtrl+C', role: 'copy' },
    { label: '粘贴', accelerator: 'CmdOrCtrl+V', role: 'paste' },
    { type: 'separator' },
    { label: '全选', accelerator: 'CmdOrCtrl+A', role: 'selectAll' },
  ],
})
