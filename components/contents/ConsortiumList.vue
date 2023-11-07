<script setup lang="ts">
const items = [
  {
    name: "神奈川大学図書館",
    url: "/documents/consortium/kanagawa.pdf",
    type: "PDF",
  },
  {
    name: "関東学院大学図書館",
    url: "/documents/consortium/kangaku_hon.pdf",
    type: "PDF",
  },
  {
    name: "慶應義塾大学日吉メディアセンター",
    url: "/documents/consortium/keio.pdf",
    type: "PDF",
  },
  {
    name: "國學院大學たまプラーザ図書館",
    url: "/documents/consortium/kokugakuin.pdf",
    type: "PDF",
  },
  {
    name: "鶴見大学図書館",
    url: "/documents/consortium/turumi.pdf",
    type: "PDF",
  },
  {
    name: "桐蔭横浜大学大学情報センター",
    url: "/documents/consortium/toin.pdf",
    type: "PDF",
  },
  {
    name: "東京都市大学横浜キャンパス図書館",
    url: "/documents/consortium/toshi.pdf",
    type: "PDF",
  },
  {
    name: "東洋英和女学院大学図書館",
    url: "/documents/consortium/toyoeiwa.pdf",
    type: "PDF",
  },
  {
    name: "フェリス女学院大学附属図書館",
  },
  {
    name: "明治学院大学横浜校舎図書館",
    url: "/documents/consortium/meigaku.pdf",
    type: "PDF",
  },
  {
    name: "横浜国立大学附属図書館",
    url: "/documents/consortium/yokokoku.pdf",
    type: "PDF",
  },
  {
    name: "横浜商科大学図書館",
    url: "/documents/consortium/yokosho.pdf",
    type: "PDF",
  },
  {
    name: "横浜市立大学学術情報センター",
    url: "/documents/consortium/yokoichi.pdf",
    type: "PDF",
  },
];
</script>

<template>
  <v-card>
    <v-card-title> 大学名一覧（50音順） </v-card-title>
    <templates-list-file :items="items"></templates-list-file>
  </v-card>
</template>
