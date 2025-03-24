<script setup lang="ts">
const title = ref('Reference Service')
useSeoMeta({
  title: title.value,
  description: 'Information about services to support your research.',
})
definePageMeta({ layout: 'english' })
</script>

<template>
  <VContainer>
    <elements-header-lv1>{{ title }}</elements-header-lv1>

    <VRow>
      <VCol cols="12">
        <contents-reference-list-eng />
      </VCol>
    </VRow>
  </VContainer>
</template>
