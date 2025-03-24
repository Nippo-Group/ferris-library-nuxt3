<script setup lang="ts">
const title = ref('開館カレンダー・開館時間')
useSeoMeta({
  title: title.value,
  description: '開館日時をお知らせするカレンダーです。',
})
</script>

<template>
  <VContainer>
    <PartsHeaderLv1>{{ title }}</PartsHeaderLv1>
    <VRow>
      <VCol cols="12">
        <contents-opening-calendar />
      </VCol>
    </VRow>
  </VContainer>
</template>
