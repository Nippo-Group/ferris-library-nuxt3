<script setup lang="ts">
const title = ref("キャリア支援");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <p>
      図書館のキャリア支援のコーナーです。就職活動に役立つ契約データベースや図書館資料を紹介します。
    </p>
    <v-row>
      <v-col cols="12" xl="8">
        <contents-carrier-list />
      </v-col>
    </v-row>
  </v-container>
</template>
