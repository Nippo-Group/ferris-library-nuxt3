<script setup lang="ts">
const title = ref("一次情報リンク集");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <div>
      <p>
        電子図書館や、電子化された図書や雑誌など、一次情報（源情報、本文そのもの）を入手できるサイトを集めました。
      </p>
      <p>
        なお、当館所蔵の電子化された一次資料は「FAIRフェリス女学院大学学術機関リポジトリ」並びに「電子コレクション」に収録しています。
      </p>
    </div>
    <contents-links-collection1-list />
  </v-container>
</template>
