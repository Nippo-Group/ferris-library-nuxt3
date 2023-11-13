<script setup lang="ts">
import imgRecitation01 from "~/assets/images/reading-project/about-recitation-01.png";
import imgRecitation02 from "~/assets/images/reading-project/about-recitation-02.png";

const name = "朗読チーム";
const content =
  "朗読の専門家から直々に指導を受けられるので、 マイクなしで相手に伝わりやすい声、 表現方法が身につきます。<br />大学祭や文学館など、学内外で発表の機会があります。";
const images = [imgRecitation01, imgRecitation02];
const movie = {
  src: "https://www.youtube.com/embed/WcCruNTE__M",
  title: "朗読動画（演目「やまなし」）",
};
</script>

<template>
  <templates-card-reading-project :title="name">
    <v-card-text> <div v-html="content"></div></v-card-text>
    <v-container>
      <v-row dense>
        <v-col
          v-for="(image, imgIndex) in images"
          :key="imgIndex"
          cols="12"
          sm="6"
        >
          <v-img :src="image"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-card-text v-if="movie">
      <elements-youtube-viewer
        :title="movie.title"
        :src="movie.src"
      ></elements-youtube-viewer>
    </v-card-text>
  </templates-card-reading-project>
</template>
