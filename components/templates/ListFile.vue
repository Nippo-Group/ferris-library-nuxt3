<script setup lang="ts">
import { useConfirmDL } from "@/composable/utilities/useConfirmDL";

const confirmDLShow = useConfirmDL().show;

type File = {
  name: string;
  url?: string;
  type?: "PDF" | "Word" | "Excel" | "Other";
};
defineProps<{
  items: File[];
}>();
</script>

<template>
  <v-list>
    <template v-for="(item, index) in items" :key="index">
      <v-list-item
        v-if="item.url && item.type"
        link
        @click="confirmDLShow(item.name, item.url, item.type)"
      >
        <v-list-item-title class="wrap-text">
          {{ item.name }}</v-list-item-title
        >
        <template #append>
          <icons-file-pdf v-if="item.type === 'PDF'"></icons-file-pdf>
          <icons-file-word v-else-if="item.type === 'Word'"></icons-file-word>
          <icons-file-excel
            v-else-if="item.type === 'Excel'"
          ></icons-file-excel>
          <icons-file-document v-else></icons-file-document>
        </template>
      </v-list-item>

      <v-list-item v-else>
        <v-list-item-title class="wrap-text">
          {{ item.name }}</v-list-item-title
        >
      </v-list-item>
    </template>
  </v-list>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
