<script setup lang="ts">
const title = 'アクセス・問い合わせ'
useSeoMeta({
  title,
  description: '図書館へのアクセスやお問い合わせ先です。',
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
      <VCol
        cols="12"
        md="6"
      >
        <contents-contact-ryokuen />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <contents-contact-yamate />
      </VCol>
    </VRow>
  </VContainer>
</template>
