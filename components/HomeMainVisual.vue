<script setup lang="ts">
import { useDisplay } from "vuetify";

import mainVisual01 from "~/assets/images/main-visual/main-visual-01.jpg";
import mainVisual02 from "~/assets/images/main-visual/main-visual-02.jpg";
import mainVisual03 from "~/assets/images/main-visual/main-visual-03.jpg";
import mainVisual04 from "~/assets/images/main-visual/main-visual-04.jpg";
import mainVisual05 from "~/assets/images/main-visual/main-visual-05.jpg";
import mainVisual06 from "~/assets/images/main-visual/main-visual-06.jpg";
import mainVisual07 from "~/assets/images/main-visual/main-visual-07.jpg";
import mainVisual08 from "~/assets/images/main-visual/main-visual-08.jpg";

const items = [
  mainVisual01,
  mainVisual02,
  mainVisual03,
  mainVisual04,
  mainVisual05,
  mainVisual06,
  mainVisual07,
  mainVisual08,
];

const carouselHeight = computed(() => {
  const breakpoint = useDisplay().name.value;
  switch (breakpoint) {
    case "xs":
      return 240;
    case "sm":
      return 280;
    case "md":
      return 340;
    case "lg":
      return 360;
    case "xl":
      return 380;
    default:
      return 340;
  }
});
</script>

<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows="hover"
    :height="carouselHeight"
    color="white"
  >
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item" cover>
    </v-carousel-item>
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
