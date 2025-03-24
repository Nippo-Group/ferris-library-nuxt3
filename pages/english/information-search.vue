<script setup lang="ts">
const title = ref('Information search')
useSeoMeta({
  title: title.value,
  description: 'Information Retrieval Flowchart',
})
definePageMeta({ layout: 'english' })
</script>

<template>
  <VContainer>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <VRow>
      <contents-information-search-links />
    </VRow>
  </VContainer>
</template>
