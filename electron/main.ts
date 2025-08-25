import { ElectronEgg } from 'ee-core'
import { Lifecycle } from './preload/lifecycle'
import { preload } from './preload'
import { createMenu } from './main/electron_menu'

// New app
const app = new ElectronEgg()

// Register lifecycle
const life = new Lifecycle()
app.register('ready', life.ready)
app.register('electron-app-ready', life.electronAppReady)
app.register('window-ready', life.windowReady)
app.register('before-close', life.beforeClose)

// Register preload
app.register('preload', (win: Electron.CrossProcessExports.BrowserWindow) => {
  preload()
  createMenu(win)
})

// Run
app.run()
