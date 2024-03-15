<script setup lang="ts">
const title = ref("フロアマップ");
useSeoMeta({ title: title.value, description: "図書館のフロアマップです。" });
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <p>緑園本館・山手分室のフロアマップ、緑園本館の「今どこマップ」です</p>

    <v-row>
      <v-col cols="12">
        <contents-floor-map />
      </v-col>
    </v-row>
  </v-container>
</template>
