<script setup lang="ts">
import type { News } from "@/types/news";

const { data } = await useMicroCMSGetList<News>({
  endpoint: "news",
  queries: { limit: 6, orders: "-date" },
});
console.log(data);
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="8" tag="section">
        <contents-slide-show></contents-slide-show>
      </v-col>
      <v-col cols="12" xl="8" tag="section">
        <contents-todays-events></contents-todays-events>
      </v-col>
      <v-col cols="12" xl="8" tag="section">
        <contents-pick-out></contents-pick-out>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6" xl="4" tag="section">
        <contents-latest-news :contents="data?.contents"></contents-latest-news>
      </v-col>
      <v-col cols="12" lg="6" xl="4" tag="section">
        <contents-search-opac></contents-search-opac>
      </v-col>
    </v-row>
  </v-container>
</template>
