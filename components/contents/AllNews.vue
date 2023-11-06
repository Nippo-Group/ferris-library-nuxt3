<script setup lang="ts">
import { usePagination } from "@/composable/utilities/usePagination";
import type { News } from "@/types/news";

const { data } = await useMicroCMSGetList<News>({
  endpoint: "news",
  queries: { limit: 100, orders: "-date" },
});

const contents = computed(() => {
  if (data) {
    return data.value?.contents;
  } else {
    return undefined;
  }
});
const contentsLength = computed(() => {
  return contents.value ? contents.value.length : 0;
});

const pageBreak = 10;
const { page, pageLength, itemEnd, itemStart } = computed(() => {
  return usePagination(contentsLength.value, pageBreak);
}).value;

const displayList = computed(() => {
  return contents.value?.slice(itemStart.value, itemEnd.value);
});
</script>

<template>
  <templates-list-news :contents-list="displayList"></templates-list-news>
  <v-pagination
    v-if="displayList"
    v-model="page"
    :length="pageLength"
  ></v-pagination>
</template>
