<script setup lang="ts">
const title = ref("学外から受けられるサポート");
useSeoMeta({ title: title.value });

const cardTitle = "新型コロナウイルス感染拡大防止措置：宅配による貸出";
const cardBody =
  "2023年度前期授業方針に従い、2023年5月7日をもって終了しました。";
</script>

<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" md="10" lg="8" xl="6">
        <v-card>
          <v-card-title>{{ cardTitle }}</v-card-title>
          <v-card-text>{{ cardBody }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
