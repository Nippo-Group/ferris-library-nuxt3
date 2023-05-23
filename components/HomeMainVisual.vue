<script setup>
import { useDisplay } from "vuetify";

const items = [
  "main-visual-01.jpg",
  "main-visual-02.jpg",
  "main-visual-03.jpg",
  "main-visual-04.jpg",
  "main-visual-06.jpg",
  "main-visual-05.jpg",
  "main-visual-07.jpg",
  "main-visual-08.jpg",
];
const itemsDirectory = "main-visual";

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
      return 300;
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
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="generateImgPath(item, itemsDirectory)"
      cover
    >
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
