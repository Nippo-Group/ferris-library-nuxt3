<script setup lang="ts">
import type { File } from '@/types/file'

const confirmDLShow = useConfirmDL().show

defineProps<{
  items: File[]
}>()
</script>

<template>
  <VList>
    <template
      v-for="(item, index) in items"
      :key="index"
    >
      <VListItem
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
        <VListItemTitle class="wrap-text">
          {{ item.name }}
        </VListItemTitle>
        <VListItemSubtitle>{{ item.note }}</VListItemSubtitle>
        <template #append>
          <icons-file-pdf v-if="item.type === 'PDF'" />
          <icons-file-word v-else-if="item.type === 'Word'" />
          <icons-file-excel
            v-else-if="item.type === 'Excel'"
          />
          <icons-file-document v-else />
        </template>
      </VListItem>

      <VListItem v-else>
        <VListItemTitle class="wrap-text">
          {{ item.name }}
        </VListItemTitle>
        <VListItemSubtitle>{{ item.note }}</VListItemSubtitle>
      </VListItem>
    </template>
  </VList>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
