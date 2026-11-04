import { app, Menu, type MenuItemConstructorOptions } from 'electron'
import { IPC_EVENTS, type MenuCommand } from '@shared/ipc'
import { openExternalSafely } from './security'
import { DEVTOOLS_ALLOWED } from './settings'
import { emitToRenderer } from './window'

const PROJECT_HOMEPAGE = 'https://github.com/Rouarn/ElectronTemplate'

function sendCommand(command: MenuCommand): void {
  emitToRenderer(IPC_EVENTS.menuCommand, command)
}

/**
 * 构建原生菜单。
 * 所有文案使用中文；开发者工具仅在允许的环境出现。
 */
export function buildApplicationMenu(): void {
  const isMac = process.platform === 'darwin'

  app.setAboutPanelOptions({
    applicationName: app.getName(),
    applicationVersion: app.getVersion(),
    copyright: '© 2026 woyuxiaji',
  })

  const macAppMenu: MenuItemConstructorOptions[] = isMac
    ? [
        {
          label: app.getName(),
          submenu: [
            { label: '关于', role: 'about' },
            { type: 'separator' },
            { label: '服务', role: 'services' },
            { type: 'separator' },
            { label: '隐藏', role: 'hide' },
            { label: '隐藏其他', role: 'hideOthers' },
            { label: '显示全部', role: 'unhide' },
            { type: 'separator' },
            { label: '退出', role: 'quit' },
          ],
        },
      ]
    : []

  const viewItems: MenuItemConstructorOptions[] = [
    { label: '重新加载', role: 'reload' },
    { label: '强制重新加载', role: 'forceReload', accelerator: 'CmdOrCtrl+Shift+R' },
    { type: 'separator' },
    { label: '实际大小', role: 'resetZoom' },
    { label: '放大', role: 'zoomIn' },
    { label: '缩小', role: 'zoomOut' },
    { type: 'separator' },
    { label: '切换全屏', role: 'togglefullscreen' },
  ]

  if (DEVTOOLS_ALLOWED) {
    viewItems.push({ type: 'separator' }, { label: '开发者工具', role: 'toggleDevTools', accelerator: 'CmdOrCtrl+Shift+I' })
  }

  const template: MenuItemConstructorOptions[] = [
    ...macAppMenu,
    {
      label: '文件',
      submenu: [
        { label: '主页', accelerator: 'CmdOrCtrl+1', click: () => sendCommand('navigate:home') },
        { label: 'IPC 调用示例', accelerator: 'CmdOrCtrl+2', click: () => sendCommand('navigate:ipc') },
        { label: '设置', accelerator: 'CmdOrCtrl+3', click: () => sendCommand('navigate:settings') },
        { type: 'separator' },
        isMac ? { label: '关闭窗口', role: 'close' } : { label: '退出', role: 'quit' },
      ],
    },
    {
      label: '编辑',
      submenu: [
        { label: '撤销', role: 'undo' },
        { label: '重做', role: 'redo' },
        { type: 'separator' },
        { label: '剪切', role: 'cut' },
        { label: '复制', role: 'copy' },
        { label: '粘贴', role: 'paste' },
        { label: '全选', role: 'selectAll' },
      ],
    },
    { label: '视图', submenu: viewItems },
    {
      label: '窗口',
      submenu: [
        { label: '最小化', role: 'minimize' },
        ...(isMac
          ? ([
              { label: '缩放', role: 'zoom' },
              { type: 'separator' },
              { label: '前置全部窗口', role: 'front' },
            ] as MenuItemConstructorOptions[])
          : []),
      ],
    },
    {
      label: '帮助',
      submenu: [
        { label: '项目主页', click: () => void openExternalSafely(PROJECT_HOMEPAGE) },
        ...(isMac ? [] : ([{ type: 'separator' }, { label: '关于', click: () => app.showAboutPanel() }] as MenuItemConstructorOptions[])),
      ],
    },
  ]

  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
}
