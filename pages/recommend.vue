<script setup lang="ts">
import { useConfirmDL } from "@/composable/utilities/useConfirmDL";

const { show } = useConfirmDL();

const title = ref("学科推奨図書");
useSeoMeta({ title: title.value });

const items = [
  {
    category: "文学部",
    contents: [
      {
        name: "英語英米文学科",
        url: "/documents/recommend/recommend-english-literature.pdf",
        type: "PDF",
      },
      {
        name: "日本語日本文学科",
        url: "/documents/recommend/recommend-japanese-literature.pdf",
        type: "PDF",
      },
      {
        name: "コミュニケーション学科",
        url: "/documents/recommend/recommend-communication.pdf",
        type: "PDF",
      },
    ],
  },
  {
    category: "音楽学部",
    contents: [
      {
        name: "音楽芸術学科",
        url: "/documents/recommend/recommend-musical-art.pdf",
        type: "PDF",
      },
    ],
  },
  {
    category: "国際交流学部",
    contents: [
      {
        name: "国際交流学科",
        url: "/documents/recommend/recommend-international-exchange.pdf",
        type: "PDF",
      },
    ],
  },
];
</script>

<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" md="10" lg="8" xl="9">
        <v-alert type="info" class="recommend-info">
          <p>
            各学科の専任教員が「〇〇学科の学生なら読んでおいてほしい本」として選定された図書です。
          </p>
          <p>
            専門分野、履修科目に関わらず、所属学科における基本知識として読むことが期待されています。
          </p>
          <p>
            <v-chip class="mr-2" variant="tonal">配架場所</v-chip
            >緑園本館2階（図書館エリア／メディアカウンター向かい）
          </p>
          <p><v-chip class="mr-2" variant="tonal">貸出期間</v-chip>2週間</p>
          <p>＊所属学科以外の「学科推奨図書」も借りられます。</p>
        </v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12"
        md="10"
        lg="8"
        xl="3"
      >
        <v-card>
          <v-card-title>{{ item.category }}</v-card-title>
          <v-list>
            <v-list-item
              v-for="(content, j) in item.contents"
              :key="j"
              link
              @click="show(content.name, content.url, content.type)"
            >
              <v-list-item-title class="wrap-text">
                {{ content.name }}
              </v-list-item-title>
              <template #append>
                <icons-file-pdf></icons-file-pdf>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.recommend-info {
  & p {
    margin-bottom: 0.5em;
  }
}
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
