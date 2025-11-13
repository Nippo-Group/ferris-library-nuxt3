<script setup lang="ts">
import { iconMap } from '@/utils'

export type Item = {
  name: string
  url: string
  category: string
  overseas: boolean
  author: string
  text: string
}
type State = {
  items: Item[]
  category: string | undefined
}
const props = defineProps<State>()
</script>

<template>
  <VRow>
    <VCol
      v-for="(item, index) in props.items"
      v-show="item.category === props.category"
      :key="index"
      cols="12"
      lg="6"
    >
      <VCard
        :href="item.url"
        target="_blank"
      >
        <VCardTitle>
          <VChip
            class="mr-2"
            color="primary"
            variant="tonal"
          >
            {{ item.overseas ? "海外" : "国内" }}
          </VChip>
          <span class="wrap-text">{{ item.name }}</span>
          <VIcon
            :icon="iconMap['openInNew']"
            end
            size="x-small"
          />
        </VCardTitle>
        <VCardSubtitle v-show="item.author">
          {{ item.author }}
        </VCardSubtitle>
        <VCardText>
          {{ item.text }}
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
