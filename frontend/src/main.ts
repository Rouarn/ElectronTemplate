import { createApp } from 'vue'
import { createPinia } from 'pinia'
import type { RendererErrorPayload } from '@shared/ipc'
import App from '@/App.vue'
import { getDesktopBridge } from '@/bridge'
import { i18n, syncI18nLocale } from '@/locales'
import { bindNativeMenuNavigation, router } from '@/router'
import '@/styles/index.css'
import 'virtual:uno.css'

const OVERLAY_ID = 'dev-error-overlay'

/**
 * 开发态可见错误提示。
 * 组件渲染异常时 Vue 会把页面留成空白，这里在右上角固定显示错误，
 * 避免开发者对着白屏猜原因。
 */
function showDevErrorOverlay(text: string): void {
  if (!import.meta.env.DEV || !document.body) return
  let overlay = document.getElementById(OVERLAY_ID)
  if (!overlay) {
    overlay = document.createElement('div')
    overlay.id = OVERLAY_ID
    overlay.style.cssText = [
      'position:fixed',
      'right:16px',
      'bottom:16px',
      'z-index:2147483647',
      'max-width:min(560px,90vw)',
      'max-height:40vh',
      'overflow:auto',
      'padding:12px 14px',
      'border-radius:10px',
      'background:rgba(190,32,45,0.95)',
      'color:#fff',
      'font:12px/1.5 ui-monospace,SFMono-Regular,Menlo,monospace',
      'white-space:pre-wrap',
      'box-shadow:0 8px 24px rgba(0,0,0,0.25)',
    ].join(';')
    document.body.appendChild(overlay)
  }
  overlay.textContent = text
}

/** 统一上报：控制台 + 开发态浮层 + 主进程日志 */
function reportError(payload: RendererErrorPayload): void {
  console.error(`[renderer] ${payload.kind}: ${payload.message}`, payload.stack ?? '')
  showDevErrorOverlay(`[${payload.kind}] ${payload.message}\n\n${payload.stack ?? ''}`)
  try {
    void getDesktopBridge()
      .app.reportError(payload)
      .catch(() => {
        // 主进程不可用时退化为仅控制台输出
      })
  } catch {
    // 桥接层尚未注入（极早期异常），忽略
  }
}

function toMessage(value: unknown): string {
  if (value instanceof Error) return value.message
  if (typeof value === 'string') return value
  return String(value)
}

function toStack(value: unknown): string | undefined {
  return value instanceof Error ? value.stack : undefined
}

// 全局兜底必须早于 mount 注册，否则初始化阶段的异常无法捕获
window.addEventListener('error', (event) => {
  reportError({ kind: 'error', message: event.message, stack: toStack(event.error), source: event.filename })
})
window.addEventListener('unhandledrejection', (event) => {
  reportError({ kind: 'unhandledrejection', message: toMessage(event.reason), stack: toStack(event.reason), source: window.location.href })
})

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

app.config.errorHandler = (error, _instance, info) => {
  reportError({ kind: 'vue', message: toMessage(error), stack: toStack(error), source: `${window.location.href} · ${info}` })
}

app.mount('#app')
