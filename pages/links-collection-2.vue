<script setup lang="ts">
const title = "二次情報リンク集";
const description =
  "国内外の図書館の所蔵情報、図書や雑誌（論文）のタイトル・著者といった書誌情報など、一次情報にアクセスするための二次情報を入手できるサイトを集めました。";
useSeoMeta({
  title,
  description,
});
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <div>
      <p>
        {{ description }}
      </p>
    </div>
    <contents-links-collection2-list />
  </v-container>
</template>
