<script setup lang="ts">
/**
 * @file 用語と説明が対になったリストを表示するためのコンポーネント
 * @description 子要素としてPartsDescriptionListItemを使用する
 *
 * @props {Array<{term: string, description: string}>} items - 用語と説明のリスト
 */
defineProps<{
  items: {
    term: string
    description: string
  }[]
}>()
</script>

<template>
  <dl class="list">
    <slot>
      <PartsDescriptionListItem
        v-for="(item, index) in items"
        :key="index"
        :term="item.term"
        :description="item.description"
      />
    </slot>
  </dl>
</template>

<style scoped>
.list > * {
  border-bottom: 1px solid #ccc;
}

.list > *:first-child {
  border-top: 1px solid #ccc;
}
</style>
