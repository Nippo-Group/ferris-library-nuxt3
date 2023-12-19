<script setup lang="ts">
import { useNews } from "@/composable/news/useNews";
import type { News } from "@/types/news";

const { newsList, newsListSize, years, setFilterFuncs } = useNews({
  limit: 100,
  orders: "-date",
});

const { page, pageLength, itemStart, itemEnd, setContentSize } =
  usePagination();
const displayList = computed(() => {
  return newsList.value?.slice(itemStart.value, itemEnd.value);
});
watch(newsListSize, () => {
  setContentSize(newsListSize.value);
});

const { yearValue, yearItems, setYearItems } = useSelectionYear();
const yearsObj = computed(() => {
  const arr = [];
  if (years.value) {
    for (const year of years.value) {
      arr.push({ label: `${year}年度`, value: year });
    }
  }
  return arr;
});
watch(years, () => {
  setYearItems(yearsObj.value);
});

const { getfiscalYear } = useFiscalYear();
watch(yearValue, () => {
  const func = (news: News) => {
    if (yearValue.value === "all") {
      return true;
    } else {
      return getfiscalYear(news.date) === yearValue.value;
    }
  };
  setFilterFuncs([func]);
  page.value = 1;
});
</script>

<template>
  <elements-selection-year
    v-model="yearValue"
    :items="yearItems"
  ></elements-selection-year>
  <templates-list-news :contents-list="displayList"></templates-list-news>
  <v-pagination
    v-if="displayList"
    v-model="page"
    :length="pageLength"
  ></v-pagination>
</template>
