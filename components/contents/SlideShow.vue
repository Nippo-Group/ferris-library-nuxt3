<script setup lang="ts">
import mainVisual01 from "~/assets/images/main-visual/main-visual-01.jpg";
import mainVisual02 from "~/assets/images/main-visual/main-visual-02.jpg";
import mainVisual03 from "~/assets/images/main-visual/main-visual-03.jpg";
import mainVisual04 from "~/assets/images/main-visual/main-visual-04.jpg";
import mainVisual05 from "~/assets/images/main-visual/main-visual-05.jpg";
import mainVisual06 from "~/assets/images/main-visual/main-visual-06.jpg";
import mainVisual07 from "~/assets/images/main-visual/main-visual-07.jpg";
import mainVisual08 from "~/assets/images/main-visual/main-visual-08.jpg";

import mainVisual01Small from "~/assets/images/main-visual/main-visual-01-small.jpg";
import mainVisual02Small from "~/assets/images/main-visual/main-visual-02-small.jpg";
import mainVisual03Small from "~/assets/images/main-visual/main-visual-03-small.jpg";
import mainVisual04Small from "~/assets/images/main-visual/main-visual-04-small.jpg";
import mainVisual05Small from "~/assets/images/main-visual/main-visual-05-small.jpg";
import mainVisual06Small from "~/assets/images/main-visual/main-visual-06-small.jpg";
import mainVisual07Small from "~/assets/images/main-visual/main-visual-07-small.jpg";
import mainVisual08Small from "~/assets/images/main-visual/main-visual-08-small.jpg";

const items = [
  {
    src: mainVisual01,
    lazy: mainVisual01Small,
  },
  {
    src: mainVisual02,
    lazy: mainVisual02Small,
  },
  {
    src: mainVisual03,
    lazy: mainVisual03Small,
  },
  {
    src: mainVisual04,
    lazy: mainVisual04Small,
  },
  {
    src: mainVisual05,
    lazy: mainVisual05Small,
  },
  {
    src: mainVisual06,
    lazy: mainVisual06Small,
  },
  {
    src: mainVisual07,
    lazy: mainVisual07Small,
  },
  {
    src: mainVisual08,
    lazy: mainVisual08Small,
  },
];
</script>

<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows="hover"
    color="white"
    :height="280"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      :lazy-src="item.lazy"
      cover
    />
  </v-carousel>
</template>

<style scoped>
.imageFilter {
  filter: grayscale(20%);
}
.imageFilter:hover {
  filter: grayscale(0%);
  transition: all 1s;
}
</style>
