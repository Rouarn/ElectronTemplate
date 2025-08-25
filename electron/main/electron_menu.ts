import { app, Menu, shell, BrowserWindow } from 'electron'

// 保存主窗口的引用
let mainWindow: Electron.CrossProcessExports.BrowserWindow | null = null

// 安全地发送消息到渲染进程
function safelySendToRenderer(channel: string, ...args: any[]) {
  // 如果主窗口不存在，尝试获取焦点窗口
  if (!mainWindow || mainWindow.isDestroyed()) {
    const focusedWindow = BrowserWindow.getFocusedWindow()
    if (focusedWindow) {
      focusedWindow.webContents.send(channel, ...args)
      return
    }
    // 如果没有焦点窗口，尝试获取所有窗口的第一个
    const allWindows = BrowserWindow.getAllWindows()
    if (allWindows.length > 0) {
      allWindows[0].webContents.send(channel, ...args)
      return
    }
    console.log(`无法发送 ${channel} 消息：没有可用的窗口`)
    return
  }
  mainWindow.webContents.send(channel, ...args)
}

// 安全地打开开发者工具
function safelyToggleDevTools() {
  if (!mainWindow || mainWindow.isDestroyed()) {
    const focusedWindow = BrowserWindow.getFocusedWindow()
    if (focusedWindow) {
      focusedWindow.webContents.toggleDevTools()
      return
    }
    const allWindows = BrowserWindow.getAllWindows()
    if (allWindows.length > 0) {
      allWindows[0].webContents.toggleDevTools()
      return
    }
    console.log('无法打开开发者工具：没有可用的窗口')
    return
  }
  mainWindow.webContents.toggleDevTools()
}

export function createMenu(win: Electron.CrossProcessExports.BrowserWindow) {
  // 保存窗口引用
  mainWindow = win
  // 创建通用菜单模板
  const template: any[] = [
    {
      label: '文件',
      submenu: [
        {
          label: '检查更新',
          click: () => {
            safelySendToRenderer('menuCheckUpdate')
          },
          accelerator: 'CmdOrCtrl+U',
        },
        { type: 'separator' },
        {
          label: '退出',
          accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Alt+F4',
          click: () => {
            app.quit()
          },
        },
      ],
    },
    {
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
    },
    {
      label: '视图',
      submenu: [
        { label: '重新加载', accelerator: 'CmdOrCtrl+R', role: 'reload' },
        { label: '强制重新加载', accelerator: 'CmdOrCtrl+Shift+R', role: 'forceReload' },
        { type: 'separator' },
        { label: '实际大小', accelerator: 'CmdOrCtrl+0', role: 'resetZoom' },
        { label: '放大', accelerator: 'CmdOrCtrl+Plus', role: 'zoomIn' },
        { label: '缩小', accelerator: 'CmdOrCtrl+-', role: 'zoomOut' },
        { type: 'separator' },
        { label: '切换全屏', accelerator: 'F11', role: 'togglefullscreen' },
      ],
    },
    {
      label: '窗口',
      submenu: [
        { label: '最小化', accelerator: 'CmdOrCtrl+M', role: 'minimize' },
        { label: '关闭', accelerator: 'CmdOrCtrl+W', role: 'close' },
      ],
    },
    {
      label: '帮助',
      submenu: [
        {
          label: '关于',
          click: () => {
            safelySendToRenderer('menuAbout')
          },
        },
        {
          label: '开发者工具',
          accelerator: 'CmdOrCtrl+Shift+I',
          click: () => {
            safelyToggleDevTools()
          },
        },
        { type: 'separator' },
        {
          label: '访问官网',
          click: async () => {
            await shell.openExternal('https://github.com/Rouarn/Electron-template')
          },
        },
      ],
    },
  ]

  // 针对 macOS 添加应用菜单
  if (process.platform === 'darwin') {
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

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}
