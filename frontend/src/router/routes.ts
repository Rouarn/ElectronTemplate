import type { RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomeView from '@/views/home/HomeView.vue'
import IpcDemoView from '@/views/ipc/IpcDemoView.vue'
import NotFoundView from '@/views/error/NotFoundView.vue'
import SettingsView from '@/views/settings/SettingsView.vue'

/** 路由表：meta.titleKey 指向语言包中的键，meta.icon 为 UnoCSS 图标类 */
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
        meta: { titleKey: 'nav.home', icon: 'i-lucide-house' },
      },
      {
        path: 'ipc',
        name: 'ipc',
        component: IpcDemoView,
        meta: { titleKey: 'nav.ipc', icon: 'i-lucide-plug-zap' },
      },
      {
        path: 'settings',
        name: 'settings',
        component: SettingsView,
        meta: { titleKey: 'nav.settings', icon: 'i-lucide-settings-2' },
      },
      {
        path: ':pathMatch(.*)*',
        name: 'not-found',
        component: NotFoundView,
        meta: { titleKey: 'error.notFound', icon: 'i-lucide-compass' },
      },
    ],
  },
]
