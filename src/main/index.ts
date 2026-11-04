import path from 'node:path'
import { app, BrowserWindow, session } from 'electron'
import { registerProcessGuards, watchRendererProcess } from './crash'
import { registerIpcHandlers } from './ipc'
import { initLogger, logger } from './logger'
import { buildApplicationMenu } from './menu'
import { registerAppProtocol, registerAppScheme } from './protocol'
import { applySessionSecurity, hardenWebContents, logSecurityBaseline } from './security'
import { updaterService } from './updater'
import { createMainWindow, focusMainWindow } from './window'
import { flushWindowState, initWindowState } from './window-state'

// 以下两项必须在 app ready 之前执行
app.enableSandbox()
registerAppScheme()
registerProcessGuards()
app.setAppUserModelId('com.rouarn.electronTemplate')

if (!app.requestSingleInstanceLock()) {
  // 已有实例在运行：直接退出，由已有实例接管
  app.quit()
} else {
  bootstrap()
}

function bootstrap(): void {
  app.on('second-instance', () => {
    logger.info('app', '检测到重复启动，聚焦已有窗口')
    focusMainWindow()
  })

  // 对每一个新建的 webContents 统一加固
  app.on('web-contents-created', (_event, contents) => {
    hardenWebContents(contents)
    watchRendererProcess(contents)
  })

  app
    .whenReady()
    .then(() => {
      initLogger()
      logger.info('app', '应用启动', { version: app.getVersion(), packaged: app.isPackaged })

      // 开发模式下打包配置不生效，手动使用正式图标，保持与生产一致的视觉
      if (!app.isPackaged) {
        const devIcon = path.join(__dirname, '../../build/icons/icon.png')
        if (process.platform === 'darwin') app.dock?.setIcon(devIcon)
      }
      logSecurityBaseline()

      applySessionSecurity(session.defaultSession)
      registerAppProtocol()
      initWindowState()

      createMainWindow()
      registerIpcHandlers()
      buildApplicationMenu()
      updaterService.init()

      app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
      })
    })
    .catch((error: unknown) => {
      logger.error('app', '应用初始化失败', error)
      app.quit()
    })

  app.on('window-all-closed', () => {
    // macOS 习惯：关闭窗口后应用继续驻留在 Dock
    if (process.platform !== 'darwin') app.quit()
  })

  app.on('before-quit', () => {
    flushWindowState()
    logger.info('app', '应用即将退出')
  })
}
