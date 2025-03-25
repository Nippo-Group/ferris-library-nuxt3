<script setup lang="ts">
const title = 'Calendar'
useSeoMeta({
  title,
  description:
    'A calendar informing you of the opening date and time of the library.',
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
        <contents-opening-calendar />
      </VCol>
    </VRow>
  </VContainer>
</template>
