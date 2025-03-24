<script setup lang="ts">
const title = ref('学外の方へ')
useSeoMeta({
  title: title.value,
  description: '学外の方のご利用についてケースごとにご案内いたします。',
})
</script>

<template>
  <VContainer>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <VRow dense>
      <VCol cols="12">
        <contents-visitor-news />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <contents-visitor-list />
      </VCol>
    </VRow>
  </VContainer>
</template>
