<script setup lang="ts">
import type { Exhibition } from '@/types/exhibitions'

defineProps<{
  item: Exhibition
}>()

const dayjs = useDayjs()
</script>

<template>
  <VCard height="100%">
    <VImg
      :src="item.eyecatch ? item.eyecatch.url : ''"
      height="160px"
      class="eyecatch"
      cover
    >
      <VCardText>
        <VChip
          v-if="item.category"
          color="primary"
        >
          {{ item.category.name }}
        </VChip>
      </VCardText>
    </VImg>
    <VCardTitle class="wrap-text">
      {{ item.title }}
    </VCardTitle>
    <VCardSubtitle
      v-if="item.date"
      class="pb-2"
    >
      {{ useDateFormat(dayjs(item.date)).ja.value }}
    </VCardSubtitle>
  </VCard>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
.VCard:hover .eyecatch {
  transition: filter 0.4s ease-in-out;
  filter: grayscale(60%);
}
.eyecatch {
  filter: grayscale(0%);
}
</style>
