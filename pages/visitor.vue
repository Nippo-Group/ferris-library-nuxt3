<script setup lang="ts">
const title = ref('学外の方へ')
useSeoMeta({
  title: title.value,
  description: '学外の方のご利用についてケースごとにご案内いたします。',
})
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row dense>
      <v-col cols="12">
        <contents-visitor-news />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <contents-visitor-list />
      </v-col>
    </v-row>
  </v-container>
</template>
