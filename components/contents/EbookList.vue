<script setup lang="ts">
import { useEbookList } from "@/composable/ebooks/useEbookList";

const { ebooks, length, lengthAll } = useEbookList();
</script>

<template>
  <v-container>
    <v-row dense>
      <v-col cols="12" xl="8">
        <p>
          <span v-if="!length"> 該当する項目はみつかりませんでした </span>
          <span v-else
            >{{ length }}/{{ lengthAll }}件の項目を表示しています</span
          >
        </p>
      </v-col>
    </v-row>
    <v-row dense>
      <v-slide-x-transition group>
        <v-col v-for="(item, i) in ebooks" :key="i" cols="12" xl="8">
          <templates-card-ebook
            :name="item.name"
            :languages="item.languages"
            :categories="item.categories"
            :available="item.available"
            :body="item.body"
            :access="item.access"
            :logout="item.logout"
            :attention="item.attention"
            :links="item.links"
            :documents="item.documents"
          ></templates-card-ebook>
        </v-col>
      </v-slide-x-transition>
    </v-row>
  </v-container>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
