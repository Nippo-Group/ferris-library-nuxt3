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
          >
            <v-card-title
              >{{ item.title
              }}<v-icon class="ml-2">mdi-open-in-new</v-icon></v-card-title
            >
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PageLearningCommons",
  data: () => ({
    title: "ラーニングコモンズ",
    items: [
      {
        title: "ラーニングコモンズの紹介",
        href: "https://www.ferris.ac.jp/information/library/learningcommons.html",
        img: "~/assets/images/learning-commons/learning-commons-01.jpg",
      },
      {
        title: "ピアノの弾ける図書館",
        href: "https://www.ferris.ac.jp/blog/20210202/7203/",
        img: "~/assets/images/learning-commons/learning-commons-02.jpg",
      },
    ],
  }),
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
