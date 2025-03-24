<script setup lang="ts">
const title = ref('データベース・電子ブック')
useSeoMeta({
  title: title.value,
  description:
    '図書館で契約しているデータベースや電子ブックと利用方法を紹介しています。',
})
</script>

<template>
  <VContainer>
    <PartsHeaderLv1>{{ title }}</PartsHeaderLv1>
    <VRow>
      <VCol cols="12">
        <contents-ebook-toolbar />
      </VCol>
    </VRow>
    <contents-ebook-list />
  </VContainer>
</template>
