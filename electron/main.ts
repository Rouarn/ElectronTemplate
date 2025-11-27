import { createMenu } from './main/menu'
import { preload } from './preload'
import { Lifecycle } from './preload/lifecycle'
import { ElectronEgg } from 'ee-core'

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
