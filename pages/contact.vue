<script setup lang="ts">
const title = ref('アクセス・問い合わせ')
useSeoMeta({
  title: title.value,
  description: '図書館へのアクセスやお問い合わせ先です。',
})
</script>

<template>
  <VContainer>
    <PartsTitlePage>{{ title }}</PartsTitlePage>
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
