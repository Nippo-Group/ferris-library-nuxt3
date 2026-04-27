<script setup lang="ts">
import type { File } from '@/types/file'
import { useConfirmDL } from '@/composables/common/'
import { iconMap } from '@/utils'

const confirmDLShow = useConfirmDL().show

defineProps<{
  items: File[]
}>()

const getIcon = (key: string) => {
  switch (key) {
    case 'PDF':
      return iconMap['pdf']
    case 'Word':
      return iconMap['word']
    case 'Excel':
      return iconMap['excel']

    default:
      return iconMap['doc']
  }
}
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
          <VIcon
            :icon="getIcon(item.type)"
            size="large"
          />
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
