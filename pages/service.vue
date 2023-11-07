<script setup lang="ts">
const title = ref("貸出サービス");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" md="10" lg="8">
        <contents-service-list />
      </v-col>
      <v-col cols="12" md="10" lg="8" class="text-center">
        <btn-my-library />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="10" lg="8">
        <contents-lending-number />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="10" lg="8">
        <contents-lending-period />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="10" lg="8">
        <contents-lending-notes />
      </v-col>
    </v-row>
  </v-container>
</template>
