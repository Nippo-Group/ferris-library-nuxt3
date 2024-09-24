<script setup lang="ts">
const title = ref('ラーニングコモンズ')
useSeoMeta({
  title: title.value,
  description:
    '図書館本館（緑園キャンパス）は、ラーニングコモンズを併設する知的で開放的な空間です。ラーニングコモンズエリアでは図書館資料を使いながらミーティング、ペアやグループでの学習など目的に応じて最適な場所を選択できます。音楽学部3・4年次生、大学院音楽研究科の学生が学ぶ山手キャンパスには、楽譜、CD、DVD、レコードなど、音楽資料や賛美歌関係資料を多数所蔵する図書館山手分室があります。',
})
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row dense>
      <v-col
        cols="12"
        md="6"
      >
        <contents-learning-commons />
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <contents-piano-playing />
      </v-col>
    </v-row>
  </v-container>
</template>
