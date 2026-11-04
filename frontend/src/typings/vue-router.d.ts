import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /** 页面标题对应的 i18n 键名 */
    titleKey: string
    /** 侧边栏使用的 UnoCSS 图标类名 */
    icon?: string
  }
}

export {}
