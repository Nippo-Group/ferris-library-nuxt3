<script setup lang="ts">
const title = 'News'
useSeoMeta({ title, description: '図書館のニュース一覧です。' })
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
        <contents-all-news />
      </VCol>
    </VRow>
  </VContainer>
</template>
