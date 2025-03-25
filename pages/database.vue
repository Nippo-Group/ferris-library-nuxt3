<script setup lang="ts">
const title = 'データベース・電子ブック'
useSeoMeta({
  title,
  description:
    '図書館で契約しているデータベースや電子ブックと利用方法を紹介しています。',
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
        <contents-ebook-toolbar />
      </VCol>
    </VRow>
    <contents-ebook-list />
  </VContainer>
</template>
