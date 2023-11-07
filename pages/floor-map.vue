<script setup lang="ts">
const title = ref("フロアマップ");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <p>緑園本館・山手分室のフロアマップ、緑園本館の「今どこマップ」です</p>

    <v-row>
      <v-col cols="12" lg="10" xl="6">
        <contents-floor-map />
      </v-col>
    </v-row>
  </v-container>
</template>
