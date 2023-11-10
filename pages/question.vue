<script setup lang="ts">
const title = ref("よくある質問 Q&A");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row>
      <v-col>
        <contents-question-list />
      </v-col>
    </v-row>
  </v-container>
</template>
