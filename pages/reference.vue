<script setup lang="ts">
const title = ref('レファレンスサービス')
useSeoMeta({
  title: title.value,
  description: '調べ物をサポートするサービスについてのご案内です。',
})
</script>

<template>
  <VContainer>
    <elements-header-lv1>{{ title }}</elements-header-lv1>

    <contents-reference-list />
  </VContainer>
</template>
