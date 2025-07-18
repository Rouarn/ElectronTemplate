<script setup lang="ts">
import welcome from '@/assets/images/welcome.png'

definePage({
  meta: {
    title: '欢迎',
    i18nKey: 'welcome',
  },
})
</script>

<template>
  <NSpace justify="center" align="center" class="bg-layout">
    <NImage :src="welcome" preview-disabled class="max-w-[1200px] mx-auto" />
  </NSpace>
</template>
