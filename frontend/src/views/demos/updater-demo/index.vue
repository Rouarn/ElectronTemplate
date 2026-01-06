<template>
  <div class="app-updater">
    <NCard title="自动更新演示" :bordered="false">
      <div class="section">
        <h3 class="title">1. 自动更新</h3>
        <NSpace>
          <NButton type="primary" @click="checkForUpdater" :loading="checking">检查更新</NButton>
          <NButton type="success" @click="download" :disabled="status !== 1">下载更新</NButton>
          <NButton type="warning" @click="install" :disabled="status !== 4">立即安装</NButton>
        </NSpace>
      </div>

      <div class="section">
        <h3 class="title">2. 下载进度</h3>
        <NProgress type="line" :percentage="percentNumber" :indicator-placement="'inside'" status="success" />
        <div class="progress-text">
          {{ progress }}
        </div>
      </div>
    </NCard>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { ipcApiRoute, specialIpcRoute } from '@/service/api/ipc'

defineOptions({
  name: 'UpdaterDemo',
})

interface UpdaterStatus {
  status: number
  desc: string
  percentNumber: number
  totalSize?: string
  transferredSize?: string
}

// 状态：0 初始化，1 有更新，2 无更新，3 下载中，4 已下载，-1 错误
const status = ref(0)
const progress = ref('')
const percentNumber = ref(0)
const checking = ref(false)

function init() {
  window.$electron?.ipcRenderer.removeAllListeners(specialIpcRoute.appUpdater)
  window.$electron?.ipcRenderer.on(specialIpcRoute.appUpdater, (_event: unknown, result: string | UpdaterStatus) => {
    // 服务端返回的结果可能是字符串化的 JSON，这里统一解析
    let data: UpdaterStatus
    if (typeof result === 'string') {
      data = JSON.parse(result)
    } else {
      data = result
    }

    console.log('updater status:', data)
    status.value = data.status

    if (data.status === 3) {
      // 下载进行中
      progress.value = data.desc
      percentNumber.value = Math.floor(data.percentNumber)
    } else {
      progress.value = data.desc
      checking.value = false // 任意返回结果都停止加载状态

      if (window.$message && data.desc) {
        if (data.status === -1) {
          window.$message.error(data.desc)
        } else {
          window.$message.info(data.desc)
        }
      }
    }
  })
}

onMounted(() => {
  init()
})

onUnmounted(() => {
  window.$electron?.ipcRenderer.removeAllListeners(specialIpcRoute.appUpdater)
})

function checkForUpdater() {
  checking.value = true
  window.$electron?.ipcRenderer
    .invoke(ipcApiRoute.appUpdater.checkForUpdater)
    .then((res: unknown) => {
      console.log('checkForUpdater result:', res)
    })
    .catch((err) => {
      checking.value = false
      console.error(err)
    })
}

function download() {
  if (status.value !== 1) {
    if (window.$message) {
      window.$message.info('没有可用版本')
    }
    return
  }
  // 手动触发下载（后端已设置为不自动下载）
  window.$electron?.ipcRenderer.invoke(ipcApiRoute.appUpdater.downloadApp).then((res: unknown) => {
    console.log('downloadApp result:', res)
  })
}

function install() {
  if (status.value !== 4) {
    return
  }
  window.$electron?.ipcRenderer.invoke(ipcApiRoute.appUpdater.quitAndInstall).then((res: unknown) => {
    console.log('quitAndInstall result:', res)
  })
}
</script>

<style scoped>
.app-updater {
  padding: 20px;
}
.section {
  margin-bottom: 20px;
}
.title {
  margin-bottom: 10px;
  font-weight: bold;
}
.progress-text {
  margin-top: 10px;
}
</style>
