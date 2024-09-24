<script setup lang="ts">
const title = ref('学外から受けられるサポート')
useSeoMeta({
  title: title.value,
  description:
    '宅配による貸出（新型コロナウイルス感染拡大防止措置）は2023年度前期授業方針に従い、2023年5月7日をもって終了しました。',
})
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row>
      <v-col cols="12">
        <contents-home-delivery />
      </v-col>
    </v-row>
  </v-container>
</template>
