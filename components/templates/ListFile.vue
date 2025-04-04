<script setup lang="ts">
import type { File } from '@/types/file'
import { useConfirmDL } from '@/composables/common/'
import { iconMap } from '@/utils'

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
          <VIcon
            v-if="item.type === 'PDF'"
            :icon="iconMap['pdf']"
          />
          <VIcon
            v-else-if="item.type === 'Word'"
            :icon="iconMap['word']"
          />
          <VIcon
            v-else-if="item.type === 'Excel'"
            :icon="iconMap['excel']"
          />
          <VIcon
            v-else
            :icon="iconMap['doc']"
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
