<script setup lang="ts">
const title = ref("Contact / Access");
useSeoMeta({ title: title.value });
definePageMeta({ layout: "english" });
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
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
