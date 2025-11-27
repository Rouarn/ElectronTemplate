import { isMac } from './platform'
import { editMenu } from './sections/edit'
import { fileMenu } from './sections/file'
import { helpMenu } from './sections/help'
import { viewMenu } from './sections/view'
import { windowMenu } from './sections/window'
import { setupNavState } from './state'
import type { MenuTemplateBuilder } from './types'
import { app, Menu } from 'electron'

/**
 * 构建菜单模板
 */
export const buildTemplate: MenuTemplateBuilder = (win) => {
  const template: Electron.MenuItemConstructorOptions[] = [fileMenu(win), editMenu(win), viewMenu(win), windowMenu(win), helpMenu(win)]

  if (isMac) {
    template.unshift({
      label: app.name,
      submenu: [
        { label: '关于', role: 'about' },
        { type: 'separator' },
        { label: '服务', role: 'services' },
        { type: 'separator' },
        { label: '隐藏', role: 'hide' },
        { label: '隐藏其他', role: 'hideOthers' },
        { label: '显示全部', role: 'unhide' },
        { type: 'separator' },
        {
          label: '退出',
          accelerator: 'Command+Q',
          click: () => {
            app.quit()
          },
        },
      ],
    })
  }

  return template
}

/**
 * 构建并设置应用主菜单
 */
export function createMenu(win?: Electron.CrossProcessExports.BrowserWindow): void {
  const menu = Menu.buildFromTemplate(buildTemplate(win))
  Menu.setApplicationMenu(menu)
  setupNavState(win)
}
