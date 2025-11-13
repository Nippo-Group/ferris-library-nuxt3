<script setup lang="ts">
definePageMeta({ layout: 'english' })
useSeoMeta({
  description: 'This is the official website of the Ferris University Library.',
})
</script>

<template>
  <VContainer>
    <VRow>
      <VCol
        cols="12"
        tag="section"
      >
        <SectionsSlideShow />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <SectionsSearchOpac />
      </VCol>
    </VRow>
  </VContainer>
</template>
