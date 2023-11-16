<script setup lang="ts">
import type { Exhibitions } from "@/types/exhibitions";

// CMSから記事を取得
const { contents } = useArticleExhibition({ limit: 100, orders: "-date" });

const dayjs = useDayjs();

// ダイアログで詳細を表示
const eyecatch = ref<string>();
const category = ref<string>();
const contentTitle = ref<string>("");
const placeToExhibit = ref<string>();
const content = ref<string>("");
const childRef = ref();
const openDitails = (item: Exhibitions) => {
  eyecatch.value = item.eyecatch ? item.eyecatch.url : undefined;
  category.value = item.category ? item.category.name : undefined;
  contentTitle.value = item.title;
  placeToExhibit.value = item.placeToExhibit
    ? item.placeToExhibit.placeToExhibit
    : undefined;
  content.value = item.content ? item.content : "読み込みエラー";
  childRef.value.show();
};

// ソートの切り替え
const reverseOrder = () => contents.value?.reverse();

// キーワード検索
const keyword = ref<string | undefined>();
const filter = (text: string): boolean => {
  if (keyword.value) {
    return text.includes(keyword.value);
  } else {
    return true;
  }
};
</script>

<template>
  <v-container
    ><v-row
      ><v-col cols="12">
        <v-toolbar :border="true" color="white" density="compact" rounded>
          <v-text-field
            v-model="keyword"
            hide-details
            single-line
            label="Keywords"
            clearable
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn icon @click="reverseOrder()">
            <icons-sort-defult />
          </v-btn>
        </v-toolbar> </v-col
    ></v-row>
    <v-row v-if="contents">
      <v-slide-y-transition group>
        <v-col
          v-for="item in contents"
          v-show="filter(item.title + item.content)"
          :key="item.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
        >
          <v-card height="100%" @click="openDitails(item)">
            <v-img
              :src="item.eyecatch ? item.eyecatch.url : ''"
              height="160px"
              class="eyecatch"
              cover
            >
              <v-card-text>
                <v-chip v-if="item.category" color="primary">
                  {{ item.category.name }}
                </v-chip>
              </v-card-text>
            </v-img>
            <v-card-title class="wrap-text">
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle v-if="item.date" class="pb-2">
              {{ useDateFormat(dayjs(item.date)).ja.value }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-slide-y-transition>
    </v-row>
    <v-row v-else>
      <v-col cols="12" sm="6" md="4" lg="3" xl="2">
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
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
.v-card:hover .eyecatch {
  transition: filter 0.4s ease-in-out;
  filter: grayscale(60%);
}
.eyecatch {
  filter: grayscale(0%);
}
.v-move {
  transition: transform 1s;
}
</style>
