<script setup lang="ts">
import imgLearningCommons01 from "~/assets/images/learning-commons/learning-commons-01.jpg";
import imgLearningCommons02 from "~/assets/images/learning-commons/learning-commons-02.jpg";
const title = ref("ラーニングコモンズ");
useSeoMeta({ title: title.value });

const items = [
  {
    title: "ラーニングコモンズの紹介",
    href: "https://www.ferris.ac.jp/information/library/learningcommons.html",
    img: imgLearningCommons01,
  },
  {
    title: "ピアノの弾ける図書館",
    href: "https://magazine.ferris.ac.jp/20210202/7203/",
    img: imgLearningCommons02,
  },
];
</script>

<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="12" md="6">
        <v-card :href="item.href" target="_blank" dark>
          <v-img
            :src="item.img"
            class="align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
            cover
          >
            <v-card-title class="text-white">
              {{ item.title }}
              <icons-open-in-new></icons-open-in-new>
            </v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
