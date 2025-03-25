<script setup lang="ts">
const title = 'Lending Service'
useSeoMeta({
  title,
  description:
    'Information about the library\'s service list, number of books checked out, and loan periods.',
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
        <contents-service-list />
      </VCol>
      <VCol
        cols="12"
        class="text-center"
      >
        <PartsBtnMyLibrary />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <contents-lending-notes />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <contents-lending-period />
      </VCol>
    </VRow>
  </VContainer>
</template>
