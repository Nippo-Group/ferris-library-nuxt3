<script setup lang="ts">
import images from "@/assets/json/digital-collection/collection03.json";
import type { ImgsObj } from "@/components/TheLightbox.vue";

const title = ref("大和物語");
useSeoMeta({ title: title.value });

const titleLogo = "/images/digital-collection/collection03/title-logo.gif";
const topImage = "/images/digital-collection/collection03/00.jpg";
const topImageCaptions = [
  "大きさ（表紙）タテ23cm×ヨコ17cm",
  "5帖　秩入り",
  "列帖装",
  "各帖挿絵7枚",
  "製作年代不明",
];
const commentary = [
  "当WEBサイト上にある情報や画像などはフェリス女学院大学が所有または管理しています。",
  "無断転載や無断使用を禁じます。",
];
const breadcrumbs = [
  {
    title: "電子コレクション",
    disabled: false,
    href: "/digital-collection",
  },
  {
    title: "大和物語",
    disabled: true,
    href: "/digital-collection/collection03",
  },
];

// Lightbox用
const lightboxComponent = ref();
const imgs = computed(() => {
  return images.map((value): ImgsObj => {
    return {
      src: value.src,
      title: value.caption,
      alt: value.caption,
    };
  });
});
const lightboxShow = (index: number): void => {
  lightboxComponent.value.onShow(index);
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <elements-nav-breadcrumbs
          :items="breadcrumbs"
        ></elements-nav-breadcrumbs>
      </v-col>
      <v-col cols="12" xl="6">
        <v-card>
          <v-row>
            <v-col cols="12" sm="8">
              <v-card-title>
                <img :src="titleLogo" :alt="title" class="titleLogo" />
              </v-card-title>
              <v-card-text>
                <p v-for="(text, i) in commentary" :key="i">{{ text }}</p>
              </v-card-text>
              <v-card-text>
                <p
                  v-for="(caption, j) in topImageCaptions"
                  :key="j"
                  class="text-caption"
                >
                  {{ caption }}
                </p>
              </v-card-text>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card-text>
                <v-img :src="topImage" cover class="bg-grey-lighten-3"></v-img>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col
        v-for="(image, idx) in images"
        :key="idx"
        cols="6"
        sm="4"
        md="3"
        xl="2"
      >
        <v-card
          elevation="0"
          color="grey-lighten-4"
          height="100%"
          @click="lightboxShow(idx)"
        >
          <v-card-text>{{ image.caption }}</v-card-text>
          <v-img :src="image.src" class="open-tinybox" aspect-ratio="1.5" cover>
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <templates-the-lightbox
      ref="lightboxComponent"
      :imgs="imgs"
    ></templates-the-lightbox>
  </v-container>
</template>

<style scoped>
.caption {
  margin: 0;
}
.titleLogo {
  max-width: 100%;
}
</style>
