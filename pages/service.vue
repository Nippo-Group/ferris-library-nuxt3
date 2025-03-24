<script setup lang="ts">
const title = ref('貸出サービス')
useSeoMeta({
  title: title.value,
  description:
    '図書館のサービス一覧・貸出冊数・貸出期間などについてご案内しています。',
})
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
        <contents-lending-number />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <contents-lending-period />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <contents-lending-notes />
      </VCol>
    </VRow>
  </VContainer>
</template>
