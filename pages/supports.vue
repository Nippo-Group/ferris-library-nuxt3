<script setup lang="ts">
const title = ref("障がいのある方への支援");
useSeoMeta({ title: title.value });
</script>

<template>
  <v-container>
    <elements-text-page-title>{{ title }}</elements-text-page-title>
    <v-row>
      <v-col cols="12">
        <p>図書館では、障がいのある方に以下の支援を行っています。</p>
      </v-col>
      <v-col cols="12" md="10" lg="8" xl="6">
        <contents-support-for-persons-with-disabilities />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="10" lg="8" xl="6">
        <v-alert density="compact" type="info">
          上記以外にもサポートが必要でしたら、図書館スタッフまでお申し出ください。できる限りご要望にお応えします。
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>
