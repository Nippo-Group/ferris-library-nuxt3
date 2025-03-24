<script setup lang="ts">
const title = ref('Calendar')
useSeoMeta({
  title: title.value,
  description:
    'A calendar informing you of the opening date and time of the library.',
})
definePageMeta({ layout: 'english' })
</script>

<template>
  <VContainer>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <VRow>
      <VCol cols="12">
        <contents-opening-calendar />
      </VCol>
    </VRow>
  </VContainer>
</template>
