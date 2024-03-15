<script setup lang="ts">
const title = ref("電子コレクション");
useSeoMeta({
  title: title.value,
  description: "図書館が所有または管理している資料を閲覧することができます。",
});
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-alert density="compact" border="start" variant="outlined" type="warning">
      当WEBサイト上にある情報や画像などは、フェリス女学院大学附属図書館が所有または管理しています。<br />
      無断転載や無断使用を禁じます。</v-alert
    >
    <v-row>
      <v-col>
        <contents-digital-collection-list />
      </v-col>
    </v-row>
  </v-container>
</template>
