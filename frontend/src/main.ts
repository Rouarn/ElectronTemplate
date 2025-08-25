import { createApp } from 'vue'
import App from './App.vue'
import './plugins/assets'
import { setupIpcEvents } from './utils/ipcEvents'
import { setupI18n } from './locales'
import { setupAppVersionNotification, setupDayjs, setupDirectives, setupIconifyOffline, setupLoading, setupNProgress } from './plugins'
import router from './router'
import { setupStore } from './stores'

function setupApp() {
  setupLoading()

  setupNProgress()

  setupIconifyOffline()

  setupDayjs()

  const app = createApp(App)

  setupDirectives(app)

  setupStore(app)

  setupI18n(app)

  app.use(router)

  setupAppVersionNotification()

  // 初始化IPC事件监听
  setupIpcEvents()

  app.mount('#app')
}

setupApp()
