<script setup lang="ts">
const title = '情報検索'
useSeoMeta({
  title,
  description: '情報検索のためのフローチャートをご紹介しています。',
})
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <SectionsPageHeader
          :title
        />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <contents-information-search-links />
      </VCol>
    </VRow>
  </VContainer>
</template>
