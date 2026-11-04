<script setup lang="ts">
import { useRouter } from 'vue-router'
import { NButton } from 'naive-ui'
import { useAppI18n } from '@/locales'

const { t } = useAppI18n()
const router = useRouter()

function backHome(): void {
  void router.replace({ name: 'home' })
}
</script>

<template>
  <section class="app-card px-10 py-16 flex flex-col items-center text-center">
    <span class="i-lucide-compass text-[44px] text-[var(--app-primary)]" />
    <h1 class="app-title text-[26px] mt-6">{{ t('error.notFound') }}</h1>
    <p class="app-muted mt-3 max-w-md leading-relaxed">{{ t('error.notFoundDesc') }}</p>
    <NButton type="primary" class="mt-8" @click="backHome">{{ t('error.backHome') }}</NButton>
  </section>
</template>
