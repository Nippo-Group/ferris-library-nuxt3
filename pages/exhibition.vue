<script setup lang="ts">
const title = ref('企画展示')
useSeoMeta({
  title: title.value,
  description: '図書館で実施された企画展示についてご紹介しています。',
})
</script>

<template>
  <VContainer>
    <PartsHeaderLv1>{{ title }}</PartsHeaderLv1>
    <VRow>
      <VCol cols="12">
        <contents-exhibition-list />
      </VCol>
    </VRow>
  </VContainer>
</template>
