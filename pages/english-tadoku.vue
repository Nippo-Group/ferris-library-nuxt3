<script setup lang="ts">
const title = ref("英語多読図書");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <elements-text-page-title>{{ title }}</elements-text-page-title>
    <p>
      英語多読（たどく）とは、辞書を使わずに、意味の分からないところは読み飛ばしながら、たくさんの英語の本を読む学習法で、英語の力を身につけるために効果的であると言われています。本学では、電子ブックと書籍の2種類の英語多読用図書を所蔵しています。
    </p>
    <v-row>
      <v-col>
        <contents-english-tadoku-list />
      </v-col>
    </v-row>
  </v-container>
</template>
