<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NButton, NTag } from 'naive-ui'
import AppLogo from '@/components/AppLogo.vue'
import { useAppI18n } from '@/locales'
import { useAppStore } from '@/stores/app'

/**
 * 默认布局壳：左侧导航 + 右侧内容区。
 * 导航项直接由路由表中的 meta 推导，新增页面无需再改这里。
 */
interface NavItem {
  name: string
  label: string
  icon: string
}

const { t } = useAppI18n()
const route = useRoute()
const router = useRouter()
const appStore = useAppStore()

const navItems = computed<NavItem[]>(() => [
  { name: 'home', label: t('nav.home'), icon: 'i-lucide-house' },
  { name: 'ipc', label: t('nav.ipc'), icon: 'i-lucide-plug-zap' },
  { name: 'settings', label: t('nav.settings'), icon: 'i-lucide-settings-2' },
])

const activeName = computed(() => (typeof route.name === 'string' ? route.name : ''))
const mainRef = ref<HTMLElement | null>(null)

// 内容区是常驻的滚动容器，切页时要把滚动位置归零，否则会带着上一页的位置进入新页面
watch(
  () => route.fullPath,
  () => mainRef.value?.scrollTo({ top: 0 }),
)

function go(name: string): void {
  void router.push({ name })
}

function toggleTheme(): void {
  appStore.setThemeMode(appStore.isDark ? 'light' : 'dark')
}
</script>

<template>
  <div class="h-screen w-screen overflow-hidden flex bg-[var(--app-bg)]">
    <aside class="w-64 h-full shrink-0 flex flex-col bg-[var(--app-surface)] border-r border-solid border-[var(--app-border)]">
      <div class="shrink-0 px-5 pt-6 pb-4 flex items-center gap-3">
        <AppLogo :size="36" />
        <div class="min-w-0">
          <p class="app-title text-[15px] leading-tight truncate">{{ t('app.name') }}</p>
          <p class="app-muted text-[12px] leading-tight mt-1">Vue 3.5 · Vite+ · Electron</p>
        </div>
      </div>

      <nav class="flex-1 min-h-0 overflow-y-auto px-3 mt-2 flex flex-col gap-1">
        <button
          v-for="item in navItems"
          :key="item.name"
          type="button"
          class="app-btn w-full text-left text-[13px]"
          :class="
            activeName === item.name
              ? 'bg-[var(--app-primary-soft)] text-[var(--app-primary)] font-600'
              : 'text-[var(--app-text-2)] hover:bg-[var(--app-bg-soft)]'
          "
          @click="go(item.name)"
        >
          <span :class="item.icon" class="text-[16px]" />
          <span>{{ item.label }}</span>
        </button>
      </nav>

      <div class="shrink-0 mt-auto px-4 py-4 border-t border-solid border-[var(--app-border)] flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <NTag size="small" :type="appStore.isElectron ? 'success' : 'warning'" :bordered="false" round>
            {{ appStore.isElectron ? t('common.electronMode') : t('common.browserMode') }}
          </NTag>
          <NButton size="small" quaternary circle :title="t('settings.theme')" @click="toggleTheme">
            <span :class="appStore.isDark ? 'i-lucide-sun' : 'i-lucide-moon'" class="text-[16px]" />
          </NButton>
        </div>
        <p class="app-muted text-[11px]">{{ appStore.platform }}</p>
      </div>
    </aside>

    <main ref="mainRef" class="flex-1 min-w-0 min-h-0 overflow-y-auto overflow-x-hidden">
      <div class="max-w-5xl mx-auto px-8 py-8">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>
  </div>
</template>
