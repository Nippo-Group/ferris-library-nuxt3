<script setup lang="ts">
const title = ref('情報検索')
useSeoMeta({
  title: title.value,
  description: '情報検索のためのフローチャートをご紹介しています。',
})
</script>

<template>
  <VContainer>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <VRow>
      <VCol cols="12">
        <contents-information-search-links />
      </VCol>
    </VRow>
  </VContainer>
</template>
