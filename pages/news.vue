<script setup lang="ts">
const title = ref('News')
useSeoMeta({ title: title.value, description: '図書館のニュース一覧です。' })
</script>

<template>
  <VContainer>
    <PartsTitlePage>{{ title }}</PartsTitlePage>
    <VRow>
      <VCol cols="12">
        <contents-all-news />
      </VCol>
    </VRow>
  </VContainer>
</template>
