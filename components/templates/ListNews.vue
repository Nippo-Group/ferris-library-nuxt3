<script setup lang="ts">
import type { News } from "@/types/news";

defineProps<{
  contentsList: News[] | undefined;
}>();
</script>

<template>
  <v-card>
    <v-list v-if="contentsList" lines="two">
      <template v-for="(contents, index) in contentsList" :key="contents.id">
        <v-divider v-show="index > 0"/>
        <templates-list-news-item :contents="contents"/>
      </template>
    </v-list>
    <v-card-text v-else> 現在、記事はありません。 </v-card-text>
  </v-card>
</template>
