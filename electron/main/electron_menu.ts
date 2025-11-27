import { app, BrowserWindow, Menu, nativeImage, shell } from 'electron'
import path, { join } from 'path'

// 保存主窗口的引用
let mainWindow: Electron.CrossProcessExports.BrowserWindow | null = null

/**
 * 解析公共路径
 * @param segments 路径片段
 * @returns 完整的公共路径
 */
function resolvePublicPath(...segments: string[]) {
  const base = app.getAppPath()
  return path.join(base, 'public', ...segments)
}

/**
 * 创建图标
 * @param prefix 图标前缀路径
 * @param iconName 图标相对路径
 * @returns 图标对象或 undefined
 */
function createIcon(prefix: string, iconName: string) {
  const fullPath = resolvePublicPath(join(prefix, iconName))
  const img = nativeImage.createFromPath(fullPath)
  return img && !img.isEmpty() ? img : undefined
}

// 安全地发送消息到渲染进程
function safelySendToRenderer(channel: string, ...args: unknown[]) {
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
  const template: Electron.MenuItemConstructorOptions[] = [
    {
      label: '文件',
      submenu: [
        {
          label: '检查更新',
          icon: createIcon('images', 'tray.png'),
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
        {
          label: '后退',
          accelerator: process.platform === 'darwin' ? 'CmdOrCtrl+[' : 'Alt+Left',
          click: () => {
            if (!mainWindow || mainWindow.isDestroyed()) {
              const focusedWindow = BrowserWindow.getFocusedWindow()
              if (focusedWindow) {
                const wc = focusedWindow.webContents
                if (wc.canGoBack()) wc.goBack()
                else console.log('无法后退：当前没有历史记录')
                return
              }
              const allWindows = BrowserWindow.getAllWindows()
              if (allWindows.length > 0) {
                const wc = allWindows[0].webContents
                if (wc.canGoBack()) wc.goBack()
                else console.log('无法后退：当前没有历史记录')
                return
              }
              console.log('无法后退：没有可用的窗口')
              return
            }
            const wc = mainWindow.webContents
            if (wc.canGoBack()) wc.goBack()
            else console.log('无法后退：当前没有历史记录')
          },
        },
        {
          label: '前进',
          accelerator: process.platform === 'darwin' ? 'CmdOrCtrl+]' : 'Alt+Right',
          click: () => {
            if (!mainWindow || mainWindow.isDestroyed()) {
              const focusedWindow = BrowserWindow.getFocusedWindow()
              if (focusedWindow) {
                const wc = focusedWindow.webContents
                if (wc.canGoForward()) wc.goForward()
                else console.log('无法前进：当前没有历史记录')
                return
              }
              const allWindows = BrowserWindow.getAllWindows()
              if (allWindows.length > 0) {
                const wc = allWindows[0].webContents
                if (wc.canGoForward()) wc.goForward()
                else console.log('无法前进：当前没有历史记录')
                return
              }
              console.log('无法前进：没有可用的窗口')
              return
            }
            const wc = mainWindow.webContents
            if (wc.canGoForward()) wc.goForward()
            else console.log('无法前进：当前没有历史记录')
          },
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
