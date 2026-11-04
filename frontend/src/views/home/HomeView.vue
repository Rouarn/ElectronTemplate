<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { NButton, NSpin, NTag } from 'naive-ui'
import AppLogo from '@/components/AppLogo.vue'
import { useAppI18n } from '@/locales'
import { useRuntimeStore } from '@/stores/runtime'

/**
 * 首页：展示模板能力与当前运行环境。
 * 运行信息全部通过类型化 bridge 获取，浏览器中会自动走 mock。
 */
const { t } = useAppI18n()
const router = useRouter()
const runtimeStore = useRuntimeStore()

onMounted(() => {
  void runtimeStore.loadAppInfo()
})

const capabilities = computed(() => [
  { icon: 'i-lucide-shield-check', title: t('home.cap1Title'), desc: t('home.cap1Desc') },
  { icon: 'i-lucide-lock', title: t('home.cap2Title'), desc: t('home.cap2Desc') },
  { icon: 'i-lucide-languages', title: t('home.cap3Title'), desc: t('home.cap3Desc') },
  { icon: 'i-lucide-rocket', title: t('home.cap4Title'), desc: t('home.cap4Desc') },
])

const runtimeRows = computed(() => {
  const info = runtimeStore.appInfo
  if (!info) return []
  return [
    { label: t('home.appName'), value: info.name },
    { label: t('home.version'), value: info.version },
    { label: t('home.electron'), value: info.electronVersion },
    { label: t('home.chrome'), value: info.chromeVersion },
    { label: t('home.node'), value: info.nodeVersion },
    { label: t('home.platform'), value: info.platform },
    { label: t('home.packaged'), value: info.isPackaged ? t('home.packagedYes') : t('home.packagedNo') },
  ]
})

const techStack = ['Vue 3.5.44', 'Vite+ 1.5.0', 'TypeScript 5.9', 'Naive UI 2', 'UnoCSS', 'Pinia 4', 'Vue Router 5', 'Vue I18n 11']

function goIpc(): void {
  void router.push({ name: 'ipc' })
}

function goSettings(): void {
  void router.push({ name: 'settings' })
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <section class="app-card px-8 py-8">
      <div class="flex items-start gap-6">
        <AppLogo :size="64" class="shrink-0" />
        <div class="min-w-0">
          <h1 class="app-title text-[28px] leading-tight">{{ t('home.title') }}</h1>
          <p class="app-muted mt-3 leading-relaxed max-w-2xl">{{ t('home.subtitle') }}</p>
          <div class="flex items-center gap-3 mt-6">
            <NButton type="primary" @click="goIpc">{{ t('home.startIpc') }}</NButton>
            <NButton quaternary @click="goSettings">{{ t('home.openSettings') }}</NButton>
          </div>
        </div>
      </div>
    </section>

    <section class="grid grid-cols-2 gap-4">
      <article v-for="item in capabilities" :key="item.title" class="app-card px-5 py-5">
        <div class="flex items-center gap-3">
          <span :class="item.icon" class="text-[20px] text-[var(--app-primary)]" />
          <h2 class="app-title text-[15px]">{{ item.title }}</h2>
        </div>
        <p class="app-muted text-[13px] leading-relaxed mt-3">{{ item.desc }}</p>
      </article>
    </section>

    <section class="app-card px-6 py-6">
      <div class="flex items-center justify-between">
        <h2 class="app-title text-[15px]">{{ t('home.runtime') }}</h2>
        <div class="flex items-center gap-2">
          <NTag size="small" :bordered="false" round>{{ t('home.techStack') }}</NTag>
          <span
            v-for="tech in techStack"
            :key="tech"
            class="text-[11px] px-2 py-0.5 rounded-lg bg-[var(--app-bg-soft)] text-[var(--app-text-2)]"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <div v-if="runtimeStore.loadingAppInfo && !runtimeRows.length" class="py-10 flex justify-center">
        <NSpin size="small" />
      </div>
      <div v-else-if="runtimeStore.lastError" class="app-muted text-[13px] mt-4">
        {{ runtimeStore.lastError.message }}
      </div>
      <dl v-else class="grid grid-cols-2 gap-x-8 gap-y-3 mt-5">
        <div v-for="row in runtimeRows" :key="row.label" class="flex items-center justify-between gap-4 text-[13px]">
          <dt class="app-muted">{{ row.label }}</dt>
          <dd class="text-[var(--app-text)] font-500 truncate">{{ row.value }}</dd>
        </div>
      </dl>
    </section>
  </div>
</template>
