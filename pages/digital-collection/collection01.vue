<script setup lang="ts">
import images from "@/assets/json/digital-collection/collection01.json";
import type { ImgsObj } from "@/components/TheLightbox.vue";

const title = ref("新三十六歌仙画帖");
useSeoMeta({ title: title.value });

const titleLogo = "/images/digital-collection/collection01/title-logo.gif";
const topImage = "/images/digital-collection/collection01/01.jpg";
const topImageCaptions = [
  "狩野洞雲（狩野益信・1625-1694）画",
  "絹本金銀泥彩色画",
  "本紙　たて 31.7cm　よこ 24.6cm",
  "折帖装 箱入",
];
const commentary = [
  "歌仙絵とは和歌に秀でた歌人の画像で、普通歌人の肖像にその歌の一首を、ときに略伝を添えたものを指します。鎌倉時代から江戸時代に非常に流行し、藤原公任 (966-1041) 撰の「三十六人撰」所収歌人を称した「三十六歌仙」をはじまりとする種々の歌仙絵が制作されました。歌仙絵は和歌文学、日本美術、また、装束や色彩といった日本文化全般にわたる古典文化研究を深める上で、貴重な資料のひとつといえます。",
  "本画帖の「新三十六歌仙」は後鳥羽院 (1180-1239) が撰んだといわれる歌仙を描き、表に絵色紙、裏に詞色紙を貼付しています。「新三十六歌仙」は「三十六歌仙」との対比の上で重要な作品であり、また後鳥羽院の問題、鎌倉歌人の後代の受容など、多くの研究課題を有した作品です。",
  "作者の狩野洞雲は本名益信、 11 歳で狩野探幽の養子となるが、探幽に実子が誕生したため離別し、駿河台狩野家を興します。徳川家光に寵遇され、功績を積んだものに贈られる位階の一つである法眼（ホウゲン）に叙せられました。",
];
const commentary2 = [
  "フェリス女学院大学蔵『新三十六歌仙画帖』翻字",
  "仮名遣い・漢字など、原文のまま翻字しました。清濁は、私意により、適宜施しました。",
  "翻字は、フェリス女学院大学大学院学生、伊東真希・高橋由華・土橋由佳子・長屋夢奈・縄手聖子・武藤麗が行ないました。",
];
const breadcrumbs = [
  {
    title: "電子コレクション",
    disabled: false,
    href: "/digital-collection",
  },
  {
    title: "新三十六歌仙画帖",
    disabled: true,
    href: "/digital-collection/collection01",
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
    <v-row dense>
      <v-col cols="12">
        <nav-breadcrumbs :items="breadcrumbs"></nav-breadcrumbs>
      </v-col>
      <v-col cols="12">
        <v-card class="d-md-flex flex-no-wrap justify-space-between">
          <v-container>
            <v-row
              ><v-col cols="12" sm="8">
                <v-card-title>
                  <v-img
                    :src="titleLogo"
                    :alt="title"
                    class="titleLogo"
                    max-width="322"
                  />
                </v-card-title>
                <v-card-text>
                  <p v-for="(text, i) in commentary" :key="i">{{ text }}</p>
                </v-card-text>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card-text>
                  <v-img
                    :max-width="220"
                    :src="topImage"
                    cover
                    class="bg-grey-lighten-3"
                  ></v-img>
                  <p
                    v-for="(caption, j) in topImageCaptions"
                    :key="j"
                    class="text-caption"
                  >
                    {{ caption }}
                  </p>
                </v-card-text>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-alert variant="outlined" type="success">
          <p v-for="(text, k) in commentary2" :key="k" class="honzi">
            {{ text }}
          </p>
        </v-alert>
      </v-col>
      <v-col
        v-for="(image, index) in images"
        :key="index"
        cols="6"
        md="3"
        xl="2"
      >
        <v-card
          elevation="0"
          color="grey-lighten-4"
          class="open-tinybox"
          @click="lightboxShow(index)"
        >
          <v-card-title :class="{ hidden: index % 2 === 1 }">
            <v-chip small variant="tonal" class="mr-2">{{ image.num }}</v-chip>
            {{ image.alt }}
          </v-card-title>
          <v-img :src="image.src" :alt="image.alt" aspect-ratio="1" cover>
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-text :class="{ hidden: index % 2 === 0 }">
            <p class="text-caption">{{ image.lr }}</p>
            <p class="text-caption">{{ image.poem }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <the-lightbox ref="lightboxComponent" :imgs="imgs"></the-lightbox>
  </v-container>
</template>

<style scoped>
.caption {
  margin: 0;
}
.titleLogo {
  max-width: 100%;
}
.honzi {
  margin: 0;
}
.hidden {
  visibility: hidden;
}
</style>
