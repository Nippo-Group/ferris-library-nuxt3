<script setup lang="ts">
const title = ref('よくある質問 Q&A')
useSeoMeta({
  title: title.value,
  description: 'ご利用にあたりよくあるご質問をまとめました。',
})
</script>

<template>
  <VContainer>
    <PartsTitlePage>{{ title }}</PartsTitlePage>
    <VRow>
      <VCol cols="12">
        <contents-question-list />
      </VCol>
    </VRow>
  </VContainer>
</template>
