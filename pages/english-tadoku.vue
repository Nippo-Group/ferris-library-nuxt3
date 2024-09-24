<script setup lang="ts">
const title = '英語多読図書'
const description
  = '英語多読（たどく）とは、辞書を使わずに、意味の分からないところは読み飛ばしながら、たくさんの英語の本を読む学習法で、英語の力を身につけるために効果的であると言われています。本学では、電子ブックと書籍の2種類の英語多読用図書を所蔵しています。'
useSeoMeta({
  title,
  description,
})
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <p>
      {{ description }}
    </p>
    <v-row>
      <v-col col="12">
        <contents-english-tadoku-list />
      </v-col>
    </v-row>
  </v-container>
</template>
