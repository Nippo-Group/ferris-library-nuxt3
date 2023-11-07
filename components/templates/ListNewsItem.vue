<script setup lang="ts">
import { useVisible } from "@/composable/utilities/useVisible";
import { useReservation } from "@/composable/utilities/useReservation";
import type { News } from "@/types/news";

defineProps<{
  contents: News;
}>();

const { visible, dismiss, show } = useVisible();
const { isReservation } = useReservation();
</script>

<template>
  <v-list-item link @click="show">
    <v-list-item-title class="wrap-text">
      <span v-show="isReservation(contents.date)" class="text-red-lighten-2"
        >予約投稿：</span
      >
      {{ contents.title }}
    </v-list-item-title>
    <v-list-item-subtitle>
      {{ dateFormat(contents.date) }}
    </v-list-item-subtitle>
    <template #append>
      <icons-arrow-right-circle
        class="text-gray-lighten-1"
      ></icons-arrow-right-circle>
    </template>
  </v-list-item>
  <v-dialog v-model="visible" scrollable max-width="600">
    <templates-card-news
      :items="contents"
      @dialog-close="dismiss"
    ></templates-card-news>
  </v-dialog>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
