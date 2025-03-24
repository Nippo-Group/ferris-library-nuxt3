<script setup lang="ts">
const title = ref('Tour and Guidance Workshops')
useSeoMeta({
  title: title.value,
  description:
    'Tour for new students, guidance on literature search for graduation thesis and report writing.',
})
definePageMeta({ layout: 'english' })
</script>

<template>
  <VContainer>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
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
