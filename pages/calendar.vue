<script setup lang="ts">
const title = ref('開館カレンダー・開館時間')
useSeoMeta({
  title: title.value,
  description: '開館日時をお知らせするカレンダーです。',
})
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row>
      <v-col cols="12">
        <contents-opening-calendar />
      </v-col>
    </v-row>
  </v-container>
</template>
