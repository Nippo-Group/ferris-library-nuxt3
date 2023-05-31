<script setup lang="ts">
import type { News } from "@/types/news";

const title = ref("News");
useSeoMeta({ title: title.value });

const { data } = await useMicroCMSGetList<News>({
  endpoint: "news",
  queries: { limit: 100, orders: "-date" },
});
</script>

<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col v-if="data" cols="12" md="10" lg="8" xl="6">
        <list-news :pagination="true" :contents="data.contents"></list-news>
      </v-col>
      <v-col v-else cols="12" md="10" lg="8" xl="6">
        <p>現在、ニュースはありません。</p>
      </v-col>
    </v-row>
  </v-container>
</template>
