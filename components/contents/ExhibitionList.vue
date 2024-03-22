<script setup lang="ts">
import { useExhibitions } from "@/composable/exhibition/useExhibitions";
import type { Exhibition } from "@/types/exhibitions";

const { exhibitionList, years, reverse } = useExhibitions({
  limit: 100,
  orders: "-date",
});

// ダイアログで詳細を表示
const eyecatch = ref<string>();
const category = ref<string>();
const contentTitle = ref<string>("");
const placeToExhibit = ref<string>();
const content = ref<string>("");
const childRef = ref();
const openDitails = (item: Exhibition) => {
  eyecatch.value = item.eyecatch ? item.eyecatch.url : undefined;
  category.value = item.category ? item.category.name : undefined;
  contentTitle.value = item.title;
  placeToExhibit.value = item.placeToExhibit
    ? item.placeToExhibit.placeToExhibit
    : undefined;
  content.value = item.content ? item.content : "読み込みエラー";
  childRef.value.show();
};

// 検索
const { getfiscalYear } = useFiscalYear();
const keyword = ref<string | undefined>();
const filter = (text: string, date: string): boolean => {
  const flag: boolean[] = [];

  if (keyword.value) {
    flag.push(text.includes(keyword.value));
  } else {
    flag.push(true);
  }

  if (yearValue.value === "all") {
    flag.push(true);
  } else {
    flag.push(getfiscalYear(date) === yearValue.value);
  }

  return flag.every((value) => value === true);
};

const { yearValue, yearItems, setYearItems } = useSelectionYear();
watchEffect(() => {
  setYearItems(years.value);
});
</script>

<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <elements-selection-year
          v-model="yearValue"
          :items="yearItems"
        ></elements-selection-year>
      </v-col>
      <v-col cols="12">
        <v-toolbar :border="true" color="white" density="compact" rounded>
          <v-text-field
            v-model="keyword"
            hide-details
            single-line
            label="Keywords"
            clearable
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn icon @click="reverse">
            <icons-sort-defult />
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>
    <v-row v-if="exhibitionList">
      <v-slide-y-transition group>
        <v-col
          v-for="item in exhibitionList"
          v-show="filter(item.title + item.content, item.date)"
          :key="item.id"
          cols="12"
          md="6"
          lg="4"
        >
          <templates-card-exhibition-list
            :item="item"
            @click="openDitails(item)"
          ></templates-card-exhibition-list>
        </v-col>
      </v-slide-y-transition>
    </v-row>
    <v-row v-else>
      <v-col cols="12" md="6" lg="4">
        <v-card title="情報がありません"></v-card>
      </v-col>
    </v-row>
  </v-container>
  <templates-card-exhibition-details
    ref="childRef"
    :eyecatch="eyecatch"
    :category="category"
    :title="contentTitle"
    :place-to-exhibit="placeToExhibit"
    :content="content"
  ></templates-card-exhibition-details>
</template>

<style scoped>
.v-move {
  transition: transform 1s;
}
</style>
