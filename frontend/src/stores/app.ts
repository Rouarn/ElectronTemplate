import { computed, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { usePreferredDark, useStorage } from '@vueuse/core'
import type { ThemeMode } from '@shared/ipc'
import { getDesktopBridge } from '@/bridge'

export type AppLocale = 'zh-CN' | 'en-US'

export const APP_LOCALES: readonly AppLocale[] = ['zh-CN', 'en-US']

/**
 * 应用级状态：主题、语言、运行环境。
 * 主题持久化在 localStorage，并同步给主进程（影响原生标题栏与系统控件）。
 */
export const useAppStore = defineStore('app', () => {
  const bridge = getDesktopBridge()
  const prefersDark = usePreferredDark()

  const themeMode = useStorage<ThemeMode>('app:theme-mode', 'system')
  const locale = useStorage<AppLocale>('app:locale', 'zh-CN')

  const isDark = computed(() => themeMode.value === 'dark' || (themeMode.value === 'system' && prefersDark.value))
  const isElectron = computed(() => bridge.runtime.isElectron)
  const platform = computed(() => bridge.runtime.platform)

  watchEffect(() => {
    document.documentElement.classList.toggle('dark', isDark.value)
  })

  watchEffect(() => {
    // 浏览器降级实现会直接忽略，不会抛错
    void bridge.window.setTheme(themeMode.value).catch(() => undefined)
  })

  function setThemeMode(mode: ThemeMode): void {
    themeMode.value = mode
  }

  function setLocale(next: AppLocale): void {
    locale.value = next
  }

  return {
    themeMode,
    locale,
    isDark,
    isElectron,
    platform,
    setThemeMode,
    setLocale,
  }
})
