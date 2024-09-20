<script setup lang="ts">
const title = "図書館紹介動画";
const movie = [
  {
    src: "https://www.youtube.com/embed/HRKpRB5fZ-o",
    title: "図書館施設・設備編",
  },
  {
    src: "https://www.youtube.com/embed/rBAip8vAxKU",
    title: "ラーニングコモンズ編",
  },
];
</script>

<template>
  <templates-card-reading-project :title="title">
    <v-container>
      <v-row dense>
        <v-col
          v-for="(item, index) in movie"
          :key="`video-${index}`"
          cols="12"
          md="6"
        >
          <elements-youtube-viewer :title="item.title" :src="item.src"/>
        </v-col>
      </v-row>
    </v-container>
  </templates-card-reading-project>
</template>
