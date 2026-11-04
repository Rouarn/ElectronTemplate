<script setup lang="ts">
import { ref } from 'vue'
import { NButton, NCard, NTag, useMessage } from 'naive-ui'
import { isBridgeError } from '@shared/ipc'
import { getDesktopBridge } from '@/bridge'
import { useAppI18n } from '@/locales'
import { useAppStore } from '@/stores/app'

/**
 * IPC 示例页。
 * 所有调用都通过 preload 暴露的类型化 bridge 发起：
 * 渲染进程无法直接访问 ipcRenderer，也就无法调用未登记的通道。
 */
const { t } = useAppI18n()
const bridge = getDesktopBridge()
const appStore = useAppStore()
const message = useMessage()

interface HistoryItem {
  id: number
  label: string
  ok: boolean
  durationMs: number
}

const result = ref<string>('')
const history = ref<HistoryItem[]>([])
const busy = ref(false)
let sequence = 0

/** 统一执行并记录一次 IPC 调用，把耗时与结果回填到页面 */
async function run(label: string, task: () => Promise<unknown>): Promise<void> {
  if (busy.value) return
  busy.value = true
  const startedAt = performance.now()
  try {
    const data = await task()
    const durationMs = Math.round(performance.now() - startedAt)
    result.value = typeof data === 'string' ? data : JSON.stringify(data, null, 2)
    history.value.unshift({ id: (sequence += 1), label, ok: true, durationMs })
    message.success(`${label}：${t('common.success')}`)
  } catch (error) {
    const durationMs = Math.round(performance.now() - startedAt)
    const text = isBridgeError(error) ? `${error.code} · ${error.message}` : error instanceof Error ? error.message : String(error)
    result.value = text
    history.value.unshift({ id: (sequence += 1), label, ok: false, durationMs })
    message.error(text)
  } finally {
    history.value = history.value.slice(0, 12)
    busy.value = false
  }
}

function clearHistory(): void {
  history.value = []
  result.value = ''
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <header>
      <h1 class="app-title text-[24px]">{{ t('ipc.title') }}</h1>
      <p class="app-muted mt-2 leading-relaxed">{{ t('ipc.subtitle') }}</p>
      <div v-if="!appStore.isElectron" class="mt-3 text-[12px] px-3 py-2 rounded-xl bg-[var(--app-primary-soft)] text-[var(--app-primary)]">
        {{ t('ipc.browserHint') }}
      </div>
    </header>

    <div class="grid grid-cols-2 gap-4">
      <NCard size="small" :title="t('ipc.appInfo')">
        <div class="flex flex-wrap gap-2">
          <NButton size="small" type="primary" :disabled="busy" @click="run(t('ipc.readAppInfo'), () => bridge.app.getInfo())">
            {{ t('ipc.readAppInfo') }}
          </NButton>
          <NButton size="small" :disabled="busy" @click="run(t('ipc.readSystemInfo'), () => bridge.system.getInfo())">
            {{ t('ipc.systemInfo') }}
          </NButton>
        </div>
      </NCard>

      <NCard size="small" :title="t('ipc.dialog')">
        <div class="flex flex-wrap gap-2">
          <NButton size="small" :disabled="busy" @click="run(t('ipc.openFile'), () => bridge.dialog.openFile({ multiple: true }))">
            {{ t('ipc.openFile') }}
          </NButton>
          <NButton
            size="small"
            :disabled="busy"
            @click="run(t('ipc.saveFile'), () => bridge.dialog.saveFile({ defaultPath: 'electron-template.txt' }))"
          >
            {{ t('ipc.saveFile') }}
          </NButton>
        </div>
      </NCard>

      <NCard size="small" :title="t('ipc.windowControl')">
        <div class="flex flex-wrap gap-2">
          <NButton size="small" :disabled="busy" @click="run(t('ipc.minimize'), () => bridge.window.minimize())">
            {{ t('ipc.minimize') }}
          </NButton>
          <NButton size="small" :disabled="busy" @click="run(t('ipc.toggleMaximize'), () => bridge.window.toggleMaximize())">
            {{ t('ipc.toggleMaximize') }}
          </NButton>
          <NButton size="small" :disabled="busy" @click="run(t('ipc.isMaximized'), () => bridge.window.isMaximized())">
            {{ t('ipc.isMaximized') }}
          </NButton>
        </div>
      </NCard>

      <NCard size="small" :title="t('ipc.update')">
        <div class="flex flex-wrap gap-2">
          <NButton size="small" :disabled="busy" @click="run(t('ipc.checkUpdate'), () => bridge.updater.check())">
            {{ t('ipc.checkUpdate') }}
          </NButton>
          <NButton size="small" :disabled="busy" @click="run(t('ipc.downloadUpdate'), () => bridge.updater.download())">
            {{ t('ipc.downloadUpdate') }}
          </NButton>
          <NButton size="small" :disabled="busy" @click="run(t('ipc.installUpdate'), () => bridge.updater.install())">
            {{ t('ipc.installUpdate') }}
          </NButton>
        </div>
      </NCard>

      <NCard size="small" :title="t('ipc.external')">
        <NButton
          size="small"
          :disabled="busy"
          @click="run(t('ipc.openHomepage'), () => bridge.app.openExternal({ url: 'https://github.com/Rouarn/Electron-template' }))"
        >
          {{ t('ipc.openHomepage') }}
        </NButton>
      </NCard>

      <NCard size="small" :title="t('ipc.result')">
        <pre class="text-[12px] leading-relaxed whitespace-pre-wrap break-all max-h-32 overflow-auto text-[var(--app-text-2)]">{{
          result || t('common.empty')
        }}</pre>
      </NCard>
    </div>

    <section class="app-card px-6 py-5">
      <div class="flex items-center justify-between mb-4">
        <h2 class="app-title text-[15px]">{{ t('ipc.history') }}</h2>
        <NButton size="tiny" quaternary :disabled="!history.length" @click="clearHistory">{{ t('ipc.clearHistory') }}</NButton>
      </div>
      <p v-if="!history.length" class="app-muted text-[13px]">{{ t('common.empty') }}</p>
      <ul v-else class="flex flex-col gap-2">
        <li v-for="item in history" :key="item.id" class="flex items-center justify-between text-[13px]">
          <div class="flex items-center gap-3 min-w-0">
            <NTag size="tiny" :type="item.ok ? 'success' : 'error'" :bordered="false">
              {{ item.ok ? 'OK' : 'FAIL' }}
            </NTag>
            <span class="truncate text-[var(--app-text)]">{{ item.label }}</span>
          </div>
          <span class="app-muted text-[12px] shrink-0">{{ t('ipc.duration') }} {{ item.durationMs }}ms</span>
        </li>
      </ul>
    </section>
  </div>
</template>
