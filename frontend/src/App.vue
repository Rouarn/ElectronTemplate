<script setup lang="ts">
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import { darkTheme } from 'naive-ui'
import { useAppStore } from './stores/modules/app'
import { useThemeStore } from './stores/modules/theme'
import { naiveDateLocales, naiveLocales } from './locales/naive'
import type { WatermarkProps } from 'naive-ui'

defineOptions({
  name: 'App',
})

const themeStore = useThemeStore()
const appStore = useAppStore()

const naiveDarkTheme = computed(() => (themeStore.darkMode ? darkTheme : undefined))

const naiveLocale = computed(() => {
  return naiveLocales[appStore.locale]
})

const naiveDateLocale = computed(() => {
  return naiveDateLocales[appStore.locale]
})

const watermarkProps = computed<WatermarkProps>(() => {
  return {
    content: themeStore.watermarkContent,
    cross: true,
    fullscreen: true,
    fontSize: 16,
    lineHeight: 16,
    width: 384,
    height: 384,
    xOffset: 12,
    yOffset: 60,
    rotate: -15,
    zIndex: 9999,
  }
})
const menuAboutListener = () => {
  window.$dialog?.info({
    title: '关于',
    content: '这是一个基于 Vue 3 和 Naive UI 的 Electron 模板',
  })
}

onMounted(() => {
  window.$ipc.on('menuAbout', menuAboutListener)
})

onUnmounted(() => {
  window.$ipc.off('menuAbout', menuAboutListener)
})
</script>

<template>
  <NConfigProvider
    :theme="naiveDarkTheme"
    :theme-overrides="themeStore.naiveTheme"
    :locale="naiveLocale"
    :date-locale="naiveDateLocale"
    class="h-full"
  >
    <AppProvider>
      <RouterView class="bg-layout" />
      <NWatermark v-if="themeStore.watermark.visible" v-bind="watermarkProps" />
    </AppProvider>
  </NConfigProvider>
</template>

<style scoped></style>
