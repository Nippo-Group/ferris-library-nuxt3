<script setup lang="ts">
const title = '開館カレンダー・開館時間'
useSeoMeta({
  title,
  description: '開館日時をお知らせするカレンダーです。',
})
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <SectionsPageHeader
          :title
        />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <SectionsOpeningCalendarV />
      </VCol>
    </VRow>
  </VContainer>
</template>
