import { watch } from 'vue'
import { createI18n, useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'
import { enUS } from './en-US'
import { zhCN } from './zh-CN'
import type { MessageSchema } from './schema'

/**
 * 全局 i18n 实例。
 * 通过 vue-i18n 的 `DefineLocaleMessage` 模块扩展约束消息结构，
 * 这样 `t()` 的键名在任意组件中都会参与类型检查。
 */
declare module 'vue-i18n' {
  export interface DefineLocaleMessage extends MessageSchema {}
}

export const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'en-US',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
  },
})

/** 组件内使用的类型化翻译函数 */
export function useAppI18n() {
  return useI18n({ useScope: 'global' })
}

/** 把应用 store 中的语言偏好同步到 i18n 实例 */
export function syncI18nLocale(): void {
  const appStore = useAppStore()
  watch(
    () => appStore.locale,
    (value) => {
      i18n.global.locale.value = value
    },
    { immediate: true },
  )
}

export type { MessageSchema }
