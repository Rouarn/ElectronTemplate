/* eslint-disable @typescript-eslint/no-explicit-any */
// ElectronMenu.js
import { app, Menu } from 'electron'
// 设置菜单栏, win表示当前窗口实例
export function createMenu(win: Electron.CrossProcessExports.BrowserWindow) {
  // darwin表示macOS，这里我们选择对macOS系统的创建应用内菜单
  if (process.platform !== 'darwin') {
    const template = [
      {
        label: '我的超级应用',
        submenu: [
          { label: '关于', accelerator: 'CmdOrCtrl+I', role: 'about' },
          // 这里可以自定义菜单项，如下可以与渲染进程通信
          {
            label: '检测更新',
            click: () => {
              win.webContents.send('menuCheckUpdate')
            },
            accelerator: 'CmdOrCtrl+U',
            enabled: false, // '这里设置是否可点击'
          },
          { type: 'separator' }, // 分割线
          { label: '隐藏', role: 'hide' },
          { label: '隐藏其他', role: 'hideOthers' },
          { type: 'separator' },
          { label: '服务', role: 'services' },
          {
            label: '退出',
            accelerator: 'Command+Q',
            click: () => {
              app.quit()
            },
          },
        ],
      },
      {
        label: '编辑',
        submenu: [
          { label: '复制', accelerator: 'CmdOrCtrl+C', role: 'copy' },
          { label: '粘贴', accelerator: 'CmdOrCtrl+V', role: 'paste' },
          { label: '剪切', accelerator: 'CmdOrCtrl+X', role: 'cut' },
          { label: '撤销', accelerator: 'CmdOrCtrl+Z', role: 'undo' },
          { label: '重做', accelerator: 'Shift+CmdOrCtrl+Z', role: 'redo' },
          { label: '全选', accelerator: 'CmdOrCtrl+A', role: 'selectAll' },
        ],
      },
      {
        label: '窗口',
        role: 'window',
        submenu: [
          {
            label: '缩放',
            role: 'Zoom',
          },
          {
            label: '最小化',
            role: 'minimize',
          },
          {
            label: '关闭',
            role: 'close',
          },
        ],
      },
      {
        label: '帮助',
        role: 'help',
        submenu: [
          {
            label: '开发者工具',
            role: 'toggledevtools',
            accelerator: 'CommandOrControl+alt+i',
          },
        ],
      },
    ]
    const menu = Menu.buildFromTemplate(template as any)
    Menu.setApplicationMenu(menu)
  } else {
    // windows及linux系统不设置菜单
    Menu.setApplicationMenu(null)
  }
}
