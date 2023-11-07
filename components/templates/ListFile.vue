<script setup lang="ts">
import { useConfirmDL } from "@/composable/utilities/useConfirmDL";

const confirmDLShow = useConfirmDL().show;

type File = {
  name: string;
  url?: string;
  type?: string;
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
        <v-list-item-title> {{ item.name }}</v-list-item-title>
        <template #append>
          <icons-file-pdf></icons-file-pdf>
        </template>
      </v-list-item>

      <v-list-item v-else>
        <v-list-item-title> {{ item.name }}</v-list-item-title>
      </v-list-item>
    </template>
  </v-list>
</template>
