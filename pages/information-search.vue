<script setup lang="ts">
const title = ref("情報検索");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row>
      <v-col cols="12" lg="8" xl="6">
        <contents-information-search-links />
      </v-col>
    </v-row>
  </v-container>
</template>
