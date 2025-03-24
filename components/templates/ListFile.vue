<script setup lang="ts">
import type { File } from '@/types/file'

const confirmDLShow = useConfirmDL().show

defineProps<{
  items: File[]
}>()
</script>

<template>
  <v-list>
    <template
      v-for="(item, index) in items"
      :key="index"
    >
      <v-list-item
        v-if="item.url && item.type"
        link
        @click="confirmDLShow(item.name, item.url, item.type)"
      >
        <div class="mb-2">
          <VChip
            v-if="item.target"
            color="primary-lighten-2"
            class="mr-1"
          >
            {{ item.target }}
          </VChip>
          <VChip
            v-if="item.date"
            variant="outlined"
          >
            {{ item.date }}
          </VChip>
        </div>
        <v-list-item-title class="wrap-text">
          {{ item.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ item.note }}</v-list-item-subtitle>
        <template #append>
          <icons-file-pdf v-if="item.type === 'PDF'" />
          <icons-file-word v-else-if="item.type === 'Word'" />
          <icons-file-excel
            v-else-if="item.type === 'Excel'"
          />
          <icons-file-document v-else />
        </template>
      </v-list-item>

      <v-list-item v-else>
        <v-list-item-title class="wrap-text">
          {{ item.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ item.note }}</v-list-item-subtitle>
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
