import { createRouter, createWebHashHistory } from 'vue-router'
import type { MenuCommand } from '@shared/ipc'
import { getDesktopBridge } from '@/bridge'
import { i18n } from '@/locales'
import { routes } from './routes'

/**
 * 使用 hash 模式：
 * 打包后页面通过 app:// 协议加载，hash 模式无需额外配置服务端回退规则，
 * 也能覆盖 file:// 等特殊场景。
 */
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

/**
 * 全局守卫示例。
 * 目前只做路由元信息校验；后续接入登录态、角色权限时在这里扩展即可。
 */
router.beforeEach((to) => {
  if (!to.meta.titleKey) return { name: 'not-found' }
  return true
})

/** 把原生菜单下发的导航指令转换成前端路由跳转 */
export function bindNativeMenuNavigation(): void {
  const targets: Record<MenuCommand, string> = {
    'navigate:home': 'home',
    'navigate:ipc': 'ipc',
    'navigate:settings': 'settings',
  }
  getDesktopBridge().menu.onCommand((command) => {
    void router.push({ name: targets[command] })
  })
}

router.afterEach((to) => {
  const titleKey = to.meta.titleKey
  document.title = titleKey ? `${i18n.global.t(titleKey)} · ${i18n.global.t('app.name')}` : i18n.global.t('app.name')
})
