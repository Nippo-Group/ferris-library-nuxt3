<script setup lang="ts">
const title = ref("よくある質問 Q&A");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col>
        <contents-question-list />
      </v-col>
    </v-row>
  </v-container>
</template>
