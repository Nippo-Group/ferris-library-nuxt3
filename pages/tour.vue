<script setup lang="ts">
const title = ref('ツアー・ガイダンス')
useSeoMeta({
  title: title.value,
  description:
    '新入生向けのツアーと卒業論文やレポート執筆のための文献検索ガイダンスについてのご紹介です。',
})
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row>
      <v-col cols="12">
        <contents-the-tour />
      </v-col>
      <v-col cols="12">
        <contents-the-guidance />
      </v-col>
    </v-row>
  </v-container>
</template>
