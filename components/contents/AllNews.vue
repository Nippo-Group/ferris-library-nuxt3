<script setup lang="ts">
const { contents } = useArticleNews({ limit: 100, orders: "-date" });

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
