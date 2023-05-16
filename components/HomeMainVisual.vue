<script setup>
const items = [
  "~/assets/images/main-visual/main-visual-01.jpg",
  "~/assets/images/main-visual/main-visual-02.jpg",
  "~/assets/images/main-visual/main-visual-03.jpg",
  "~/assets/images/main-visual/main-visual-04.jpg",
  "~/assets/images/main-visual/main-visual-06.jpg",
  "~/assets/images/main-visual/main-visual-05.jpg",
  "~/assets/images/main-visual/main-visual-07.jpg",
  "~/assets/images/main-visual/main-visual-08.jpg",
];

/* const carouselHeight = computed(() => {
  let height;
  switch (this.$vuetify.breakpoint.name) {
    case "xs":
      height = 260;
      break;
    case "sm":
      height = 280;
      break;
    case "md":
      height = 300;
      break;
    case "lg":
      height = 320;
      break;
    case "xl":
      height = 340;
      break;
  }
  return height;
}); */
</script>

<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    :height="300"
  >
    <v-carousel-item v-for="(item, i) in items" :key="i">
      <v-img :src="item" class="imageFilter" :height="300"></v-img>
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
