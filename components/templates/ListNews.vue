<script setup lang="ts">
import { useNews } from "@/composable/news/useNews";
import type { News } from "@/types/news";

defineProps<{
  contentsList: News[] | undefined;
}>();

const { newsListFilter } = useNews();
</script>

<template>
  <v-card>
    <v-list v-if="contentsList" lines="two">
      <template
        v-for="(contents, index) in newsListFilter(contentsList)"
        :key="contents.id"
      >
        <v-divider v-show="index > 0"></v-divider>
        <templates-list-news-item :contents="contents">
        </templates-list-news-item>
      </template>
    </v-list>
    <v-card-text v-else>
      <p>現在ニュースはありません</p>
    </v-card-text>
  </v-card>
</template>
