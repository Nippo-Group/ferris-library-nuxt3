<script setup lang="ts">
const title = ref("アクセス・問い合わせ");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" sm="8" md="6" lg="4">
        <contents-contact-ryokuen />
      </v-col>
      <v-col cols="12" sm="8" md="6" lg="4">
        <contents-contact-yamate />
      </v-col>
    </v-row>
  </v-container>
</template>
