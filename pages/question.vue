<script setup lang="ts">
const title = ref("よくある質問 Q&A");
useSeoMeta({
  title: title.value,
  description: "ご利用にあたりよくあるご質問をまとめました。",
});
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row>
      <v-col cols="12">
        <contents-question-list />
      </v-col>
    </v-row>
  </v-container>
</template>
