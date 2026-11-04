<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { NButton, NCard, NRadioButton, NRadioGroup, NSelect, useDialog, useMessage } from 'naive-ui'
import { fetchServerTime } from '@/api/modules/example'
import { getDesktopBridge } from '@/bridge'
import { useAppI18n } from '@/locales'
import { APP_LOCALES, useAppStore, type AppLocale } from '@/stores/app'
import type { AppPaths, ThemeMode } from '@shared/ipc'

/**
 * 设置页：主题、语言、目录信息、接口客户端示例与关于信息。
 * 主题与语言由 pinia 持久化，主进程也会同步主题以影响原生控件。
 */
const { t } = useAppI18n()
const bridge = getDesktopBridge()
const appStore = useAppStore()
const message = useMessage()
const dialog = useDialog()

const paths = ref<AppPaths | null>(null)
const apiResult = ref<string>('')
const callingApi = ref(false)

const themeOptions: Array<{ label: string; value: ThemeMode }> = [
  { label: t('settings.themeSystem'), value: 'system' },
  { label: t('settings.themeLight'), value: 'light' },
  { label: t('settings.themeDark'), value: 'dark' },
]

const localeOptions = APP_LOCALES.map((locale) => ({
  label: locale === 'zh-CN' ? '简体中文' : 'English',
  value: locale,
}))

const pathRows = [
  { key: 'userData', label: t('settings.userData') },
  { key: 'logs', label: t('settings.logs') },
  { key: 'home', label: t('settings.home') },
  { key: 'temp', label: t('settings.temp') },
] as const

onMounted(async () => {
  try {
    paths.value = await bridge.app.getPaths()
  } catch {
    paths.value = null
  }
})

function setTheme(value: ThemeMode): void {
  appStore.setThemeMode(value)
}

function setLocale(value: AppLocale): void {
  appStore.setLocale(value)
  message.success(t('common.success'))
}

async function callSampleApi(): Promise<void> {
  callingApi.value = true
  try {
    const data = await fetchServerTime()
    apiResult.value = JSON.stringify(data, null, 2)
  } catch (error) {
    apiResult.value = error instanceof Error ? error.message : String(error)
  } finally {
    callingApi.value = false
  }
}

function openHomepage(): void {
  void bridge.app.openExternal({ url: 'https://github.com/Rouarn/ElectronTemplate' })
}

function confirmQuit(): void {
  dialog.warning({
    title: t('settings.quit'),
    content: t('settings.quitConfirm'),
    positiveText: t('settings.quit'),
    negativeText: t('common.cancel'),
    onPositiveClick: () => {
      void bridge.app.quit()
    },
  })
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <header>
      <h1 class="app-title text-[24px]">{{ t('settings.title') }}</h1>
      <p class="app-muted mt-2 leading-relaxed">{{ t('settings.subtitle') }}</p>
    </header>

    <NCard size="small" :title="t('settings.appearance')">
      <div class="flex flex-col gap-5">
        <div>
          <p class="app-muted text-[13px] mb-2">{{ t('settings.theme') }}</p>
          <NRadioGroup :value="appStore.themeMode" @update:value="setTheme">
            <NRadioButton v-for="option in themeOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </NRadioButton>
          </NRadioGroup>
        </div>
        <div>
          <p class="app-muted text-[13px] mb-2">{{ t('settings.language') }}</p>
          <NSelect :value="appStore.locale" :options="localeOptions" class="max-w-60" @update:value="setLocale" />
        </div>
      </div>
    </NCard>

    <NCard size="small" :title="t('settings.paths')">
      <dl class="flex flex-col gap-3 text-[13px]">
        <div v-for="row in pathRows" :key="row.key" class="flex items-center justify-between gap-6">
          <dt class="app-muted shrink-0">{{ row.label }}</dt>
          <dd class="text-[var(--app-text)] truncate text-right">{{ paths ? paths[row.key] : t('common.loading') }}</dd>
        </div>
      </dl>
    </NCard>

    <NCard size="small" :title="t('settings.apiDemo')">
      <p class="app-muted text-[13px] leading-relaxed">{{ t('settings.apiDesc') }}</p>
      <div class="flex items-center gap-3 mt-4">
        <NButton size="small" :loading="callingApi" @click="callSampleApi">{{ t('settings.callApi') }}</NButton>
        <span class="app-muted text-[12px]">{{ t('settings.apiResult') }}</span>
      </div>
      <pre v-if="apiResult" class="mt-4 text-[12px] leading-relaxed whitespace-pre-wrap break-all text-[var(--app-text-2)]">{{
        apiResult
      }}</pre>
    </NCard>

    <NCard size="small" :title="t('settings.about')">
      <div class="flex flex-wrap items-center gap-3">
        <NButton size="small" @click="openHomepage">{{ t('settings.homepage') }}</NButton>
        <NButton size="small" type="error" ghost @click="confirmQuit">{{ t('settings.quit') }}</NButton>
      </div>
    </NCard>
  </div>
</template>
