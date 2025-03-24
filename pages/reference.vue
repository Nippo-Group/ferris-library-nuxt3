<script setup lang="ts">
const title = ref('レファレンスサービス')
useSeoMeta({
  title: title.value,
  description: '調べ物をサポートするサービスについてのご案内です。',
})
</script>

<template>
  <VContainer>
    <PartsTitlePage>{{ title }}</PartsTitlePage>

    <contents-reference-list />
  </VContainer>
</template>
