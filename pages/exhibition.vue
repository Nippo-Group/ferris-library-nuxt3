<script setup lang="ts">
const title = '企画展示'
useSeoMeta({
  title,
  description: '図書館で実施された企画展示についてご紹介しています。',
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
        <contents-exhibition-list />
      </VCol>
    </VRow>
  </VContainer>
</template>
