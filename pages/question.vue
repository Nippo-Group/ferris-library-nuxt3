<script setup lang="ts">
const title = 'よくある質問 Q&A'
useSeoMeta({
  title,
  description: 'ご利用にあたりよくあるご質問をまとめました。',
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
        <contents-question-list />
      </VCol>
    </VRow>
  </VContainer>
</template>
