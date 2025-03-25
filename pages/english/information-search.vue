<script setup lang="ts">
const title = 'Information search'
useSeoMeta({
  title,
  description: 'Information Retrieval Flowchart',
})
definePageMeta({ layout: 'english' })
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
      <contents-information-search-links />
    </VRow>
  </VContainer>
</template>
