<script setup lang="ts">
const title = 'Reference Service'
useSeoMeta({
  title,
  description: 'Information about services to support your research.',
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
      <VCol cols="12">
        <contents-reference-list-eng />
      </VCol>
    </VRow>
  </VContainer>
</template>
