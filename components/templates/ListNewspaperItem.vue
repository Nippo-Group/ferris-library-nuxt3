<script setup lang="ts">
import type { Newspaper } from "@/types/newspaper";
type State = {
  items: Newspaper[];
};
const props = defineProps<State>();

const displayTitle = (name: string): string => {
  switch (name) {
    case "country":
      return "発行国";
    case "publisher":
      return "発行元";
    case "cycle":
      return "刊行頻度";
    case "retentionPeriod":
      return "所蔵状況";
    case "location":
      return "所在";
    case "note":
      return "収録データベース・備考";
    default:
      return name;
  }
};
const showValue = (value: Newspaper, name: string): boolean => {
  const flag = value && name !== "title" && name !== "subTitle";
  return flag;
};
</script>

<template>
  <v-table>
    <tbody>
      <tr
        v-for="(value, name, index) in props.items"
        v-show="showValue(value, String(name))"
        :key="index"
      >
        <th>{{ displayTitle(String(name)) }}</th>
        <td v-html="value"></td>
      </tr>
    </tbody>
  </v-table>
</template>
