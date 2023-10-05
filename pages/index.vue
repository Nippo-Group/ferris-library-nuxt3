<script setup lang="ts">
import type { News } from "@/types/news";

const { data } = await useMicroCMSGetList<News>({
  endpoint: "news",
  queries: { limit: 6, orders: "-date" },
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="8">
        <home-main-visual></home-main-visual>
      </v-col>
      <v-col cols="12" xl="8">
        <home-calendar></home-calendar>
      </v-col>
      <v-col cols="12" xl="8">
        <div class="text-center text-md-left text-h5 mb-2 text-grey-darken-2">
          <icons-gesture-tap start />Pick Out
        </div>
        <home-pickout></home-pickout>
      </v-col>
    </v-row>
    <v-row v-if="data">
      <v-col cols="12" lg="6" xl="4">
        <div class="text-center text-md-left text-h5 mb-2 text-grey-darken-2">
          <icons-newspaper-variant start></icons-newspaper-variant>News
        </div>
        <list-news :contents="data.contents"></list-news>
        <div class="text-center mt-5">
          <btn-inside link="ニュース一覧へ" to="news"></btn-inside>
        </div>
      </v-col>
      <v-col cols="12" lg="6" xl="4">
        <div class="text-center text-md-left text-h5 mb-2 text-grey-darken-2">
          <icons-library-shelves start />OPAC 蔵書検索
        </div>
        <home-opac></home-opac>
      </v-col>
    </v-row>
  </v-container>
</template>
