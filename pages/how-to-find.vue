<script setup lang="ts">
const title = '資料の探し方'
useSeoMeta({
  title,
  description: '資料探しのヒントとなる書類をまとめています。',
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
        <contents-how-to-find-list />
      </VCol>
    </VRow>
  </VContainer>
</template>
