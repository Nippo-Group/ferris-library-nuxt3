<script setup lang="ts">
import imgReadingProject from "~/assets/images/pickout/home-pickout-reading-project.png";
import imgExhibition from "~/assets/images/pickout/home-pickout-exhibition.png";
import imgDatabase from "~/assets/images/pickout/home-pickout-database.png";
import imgDigitalCollection from "~/assets/images/pickout/home-pickout-digital-collection.png";
import imgReference from "~/assets/images/pickout/home-pickout-reference.png";

const pickOut = [
  {
    name: "読書運動プロジェクト",
    to: "/reading-project",
    text: "図書館を拠点とした、「読書」を共有・発信する様々な活動をご紹介します",
    image: imgReadingProject,
  },
  {
    name: "企画展示",
    to: "/exhibition",
    text: "図書館で実施する企画展示をご紹介します",
    image: imgExhibition,
  },
  {
    name: ["データベース", "・電子ブック"],
    to: "/database",
    text: "図書館で契約しているデータベースや電子ブックを検索することができます",
    image: imgDatabase,
  },
  {
    name: "電子コレクション",
    to: "/digital-collection",
    text: "図書館所蔵の貴重な資料をWEBから閲覧できます",
    image: imgDigitalCollection,
  },
  {
    name: "レファレンスサービス",
    to: "/reference",
    text: "ご希望の資料が当図書館にない場合も資料を探すお手伝いができます",
    image: imgReference,
  },
];
</script>

<template>
  <div class="text-center text-md-left text-h5 mb-2 text-grey-darken-2">
    <icons-gesture-tap start />Pick Out
  </div>
  <v-slide-group multiple show-arrows>
    <v-slide-group-item
      v-for="(item, index) in pickOut"
      :key="'pickout-' + index"
    >
      <v-card
        variant="outlined"
        color="rgba(0, 0, 0, 0.1)"
        :to="item.to"
        hover
        class="ma-1"
        width="240"
      >
        <v-img
          :src="item.image"
          height="160px"
          cover
          class="align-end"
          gradient="to bottom, rgba(255,255,255,.2), rgba(255,255,255,1)"
        >
          <v-card-title class="text-black wrap-text">
            <elements-newline-text :item="item.name"/>
          </v-card-title>
        </v-img>
        <v-card-text class="text-black">{{ item.text }}</v-card-text>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
