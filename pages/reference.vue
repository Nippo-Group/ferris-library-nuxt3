<script setup lang="ts">
const title = 'レファレンスサービス'
useSeoMeta({
  title,
  description: '調べ物をサポートするサービスについてのご案内です。',
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
      <VCol>
        <contents-reference-list />
      </VCol>
    </VRow>
  </VContainer>
</template>
