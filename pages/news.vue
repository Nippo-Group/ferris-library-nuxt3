<script setup lang="ts">
const title = ref('News')
useSeoMeta({ title: title.value, description: '図書館のニュース一覧です。' })
</script>

<template>
  <VContainer>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <VRow>
      <VCol cols="12">
        <contents-all-news />
      </VCol>
    </VRow>
  </VContainer>
</template>
