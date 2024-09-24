<script setup lang="ts">
const title = 'キャリア支援'
const description
  = '図書館のキャリア支援のコーナーです。就職活動に役立つ契約データベースや図書館資料を紹介します。'
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
      <v-col cols="12">
        <contents-carrier-list />
      </v-col>
    </v-row>
  </v-container>
</template>
