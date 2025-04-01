<script setup lang="ts">
import imgLearningCommons01 from '~/assets/images/learning-commons/learning-commons-01.jpg'
import imgLearningCommons02 from '~/assets/images/learning-commons/learning-commons-02.jpg'

const title = 'ラーニングコモンズ'
useSeoMeta({
  title,
  description:
    '図書館本館（緑園キャンパス）は、ラーニングコモンズを併設する知的で開放的な空間です。ラーニングコモンズエリアでは図書館資料を使いながらミーティング、ペアやグループでの学習など目的に応じて最適な場所を選択できます。音楽学部3・4年次生、大学院音楽研究科の学生が学ぶ山手キャンパスには、楽譜、CD、DVD、レコードなど、音楽資料や賛美歌関係資料を多数所蔵する図書館山手分室があります。',
})
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <SectionsPageHeader
          :title
        />
      </VCol>
    </VRow>
    <VRow dense>
      <VCol
        cols="12"
        md="6"
      >
        <TemplatesCardBanner
          href="https://www.ferris.ac.jp/information/library/learningcommons.html"
          :img="imgLearningCommons01"
          title="ラーニングコモンズの紹介"
          height="200px"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <TemplatesCardBanner
          href="https://magazine.ferris.ac.jp/20210202/7203/"
          :img="imgLearningCommons02"
          title="ピアノの弾ける図書館"
          height="200px"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>
