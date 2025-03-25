<script setup lang="ts">
const title = '緑園本館所蔵新聞リスト'
useSeoMeta({
  title,
  description: '所蔵されている新聞の情報をご案内しています。',
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
        <contents-newspaper-list />
      </VCol>
    </VRow>
  </VContainer>
</template>
