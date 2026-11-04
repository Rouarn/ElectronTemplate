import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import { i18n, syncI18nLocale } from '@/locales'
import { bindNativeMenuNavigation, router } from '@/router'
import '@/styles/index.css'
import 'virtual:uno.css'

/**
 * 渲染进程入口。
 * 顺序很重要：先安装 pinia，再同步语言偏好，最后挂载路由。
 */
const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(i18n)
syncI18nLocale()
app.use(router)
bindNativeMenuNavigation()

// 统一捕获组件渲染期间未处理的异常，避免界面静默白屏
app.config.errorHandler = (error, _instance, info) => {
  console.error('[renderer] 未处理的组件异常', { error, info })
}

app.mount('#app')
