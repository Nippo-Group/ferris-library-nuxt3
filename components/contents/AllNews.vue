<script setup lang="ts">
import type { News } from "@/types/news";

const { data } = await useMicroCMSGetList<News>({
  endpoint: "news",
  queries: { limit: 100, orders: "-date" },
});

const contents = computed(() => {
  return data.value?.contents;
});

const { page, pageLength, itemStart, itemEnd, setContentSize } =
  usePagination();

const contentsLength = computed(() => {
  return contents.value ? contents.value.length : 0;
});

const displayList = computed(() => {
  return contents.value?.slice(itemStart.value, itemEnd.value);
});

watchEffect(() => {
  setContentSize(contentsLength.value);
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
