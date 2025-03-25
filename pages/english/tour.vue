<script setup lang="ts">
const title = 'Tour and Guidance Workshops'
useSeoMeta({
  title,
  description:
    'Tour for new students, guidance on literature search for graduation thesis and report writing.',
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
      <VCol
        cols="12"
        lg="6"
      >
        <contents-the-tour />
      </VCol>
      <VCol
        cols="12"
        lg="6"
      >
        <contents-the-guidance />
      </VCol>
    </VRow>
  </VContainer>
</template>
