<script setup lang="ts">
import type { Exhibition } from "@/types/exhibitions";
defineProps<{
  item: Exhibition;
}>();

const dayjs = useDayjs();
</script>

<template>
  <v-card height="100%">
    <v-img
      :src="item.eyecatch ? item.eyecatch.url : ''"
      height="160px"
      class="eyecatch"
      cover
    >
      <v-card-text>
        <v-chip v-if="item.category" color="primary">
          {{ item.category.name }}
        </v-chip>
      </v-card-text>
    </v-img>
    <v-card-title class="wrap-text">
      {{ item.title }}
    </v-card-title>
    <v-card-subtitle v-if="item.date" class="pb-2">
      {{ useDateFormat(dayjs(item.date)).ja.value }}
    </v-card-subtitle>
  </v-card>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
.v-card:hover .eyecatch {
  transition: filter 0.4s ease-in-out;
  filter: grayscale(60%);
}
.eyecatch {
  filter: grayscale(0%);
}
</style>
