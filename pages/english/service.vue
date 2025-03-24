<script setup lang="ts">
const title = ref('Lending Service')
useSeoMeta({
  title: title.value,
  description:
    'Information about the library\'s service list, number of books checked out, and loan periods.',
})
definePageMeta({ layout: 'english' })
</script>

<template>
  <VContainer>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <VRow>
      <VCol cols="12">
        <contents-service-list />
      </VCol>
      <VCol
        cols="12"
        class="text-center"
      >
        <elements-btn-my-library />
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
