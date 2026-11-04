<script setup lang="ts">
import { computed } from 'vue'
import {
  darkTheme,
  dateEnUS,
  dateZhCN,
  enUS as naiveEnUS,
  NConfigProvider,
  NDialogProvider,
  NGlobalStyle,
  NMessageProvider,
  zhCN as naiveZhCN,
} from 'naive-ui'
import { useAppStore } from '@/stores/app'
import { naiveThemeOverrides } from '@/styles/naive-theme'

/**
 * 应用根组件。
 * 统一在这里挂载 naive-ui 的配置与各类 Provider，
 * 页面组件只消费 useMessage / useDialog，不重复创建实例。
 */
const appStore = useAppStore()

const naiveLocale = computed(() => (appStore.locale === 'en-US' ? naiveEnUS : naiveZhCN))
const naiveDateLocale = computed(() => (appStore.locale === 'en-US' ? dateEnUS : dateZhCN))
</script>

<template>
  <n-config-provider
    :theme="appStore.isDark ? darkTheme : null"
    :theme-overrides="naiveThemeOverrides"
    :locale="naiveLocale"
    :date-locale="naiveDateLocale"
  >
    <n-global-style />
    <n-message-provider>
      <n-dialog-provider>
        <router-view />
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>
