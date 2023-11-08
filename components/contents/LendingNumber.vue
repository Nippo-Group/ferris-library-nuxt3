<script setup lang="ts">
const headers = ["対象", "図書／雑誌", "学科推奨図書", "楽譜", "CD/レコード"];
const quantity = [
  [
    "学部生／大学院生／科目等履修生／ディプロマ生",
    "各30冊",
    "30冊",
    "8冊",
    "各8点",
  ],
  ["卒業生／中高生", "各30冊", "不可", "8冊", "各8点"],
  ["職員／定年退職教職員", "各30冊", "不可", "8冊", "各8点"],
  ["教員／名誉教授", "各60冊", "不可", "30冊", "各30点"],
];
</script>

<template>
  <elements-text-sub-title>貸出冊数</elements-text-sub-title>
  <elements-responsive-table
    :items-array="quantity"
    :headers="headers"
  ></elements-responsive-table>
  <v-alert type="success" class="mt-4">
    参考図書、雑誌の最新号、貴重書、マイクロ資料、ビデオ、LD、DVD、CD-ROMは館内でご利用ください。
  </v-alert>
</template>
