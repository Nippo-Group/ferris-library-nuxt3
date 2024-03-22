<script setup lang="ts">
const title = ref("アクセス・問い合わせ");
useSeoMeta({
  title: title.value,
  description: "図書館へのアクセスやお問い合わせ先です。",
});
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row>
      <v-col cols="12" md="6">
        <contents-contact-ryokuen />
      </v-col>
      <v-col cols="12" md="6">
        <contents-contact-yamate />
      </v-col>
    </v-row>
  </v-container>
</template>
