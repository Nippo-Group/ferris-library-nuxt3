<script setup lang="ts">
import type { Exhibitions } from "@/types/exhibitions";

const title = ref("企画展示");
useSeoMeta({ title: title.value });

// CMSから記事を取得
const { data } = await useMicroCMSGetList<Exhibitions>({
  endpoint: "exhibition",
  queries: { orders: "-date" },
});

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
  childRef.value.dialogSwitching();
};

// ソートの切り替え
const reverseOrder = (): void => {
  data.value?.contents.reverse();
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="8">
        <v-toolbar :border="true" color="white" density="compact" rounded>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="reverseOrder()">
            <icons-sort-defult />
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>
    <transition-group v-if="data" tag="div" class="v-row">
      <v-col
        v-for="item in data.contents"
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
            {{ dateFormat(item.date).format }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </transition-group>
    <v-row v-else>
      <v-col cols="12">
        <p>現在、表示できる情報がありません。</p>
      </v-col>
    </v-row>
    <card-exhibition-details
      ref="childRef"
      :eyecatch="eyecatch"
      :category="category"
      :title="contentTitle"
      :place-to-exhibit="placeToExhibit"
      :content="content"
    ></card-exhibition-details>
  </v-container>
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
