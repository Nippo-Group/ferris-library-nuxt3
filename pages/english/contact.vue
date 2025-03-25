<script setup lang="ts">
const title = 'Contact / Access'
useSeoMeta({
  title,
  description: 'Access to the library and contact information.',
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
        <contents-contact-ryokuen />
      </VCol>
      <VCol
        cols="12"
        lg="6"
      >
        <contents-contact-yamate />
      </VCol>
    </VRow>
  </VContainer>
</template>
