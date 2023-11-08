<script setup lang="ts">
const title = ref("二次情報リンク集");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <elements-text-page-title>{{ title }}</elements-text-page-title>
    <div>
      <p>
        国内外の図書館の所蔵情報、図書や雑誌（論文）のタイトル・著者といった書誌情報など、一次情報にアクセスするための二次情報を入手できるサイトを集めました。
      </p>
    </div>
    <contents-links-collection2-list />
  </v-container>
</template>
