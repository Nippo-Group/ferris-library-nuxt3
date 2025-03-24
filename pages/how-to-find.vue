<script setup lang="ts">
const title = ref('資料の探し方')
useSeoMeta({
  title: title.value,
  description: '資料探しのヒントとなる書類をまとめています。',
})
</script>

<template>
  <VContainer>
    <PartsHeaderLv1>{{ title }}</PartsHeaderLv1>
    <contents-how-to-find-list />
  </VContainer>
</template>
