<script setup lang="ts">
const title = ref('Contact / Access')
useSeoMeta({
  title: title.value,
  description: 'Access to the library and contact information.',
})
definePageMeta({ layout: 'english' })
</script>

<template>
  <VContainer>
    <PartsHeaderLv1>{{ title }}</PartsHeaderLv1>
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
