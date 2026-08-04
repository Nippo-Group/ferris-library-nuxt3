<script setup lang="ts">
/**
 * @file 箇条書きリストを表示するためのコンポーネント
 * @description リストの内容はスロットまたはpropsで指定でき、スロットが優先される。
 *
 * @props {Array<string>} items - 箇条書きのリスト
 * @props {'unordered' | 'ordered'} type - リストの種類
 */

withDefaults(defineProps<{
  items?: string[]
  type?: 'unordered' | 'ordered'
}>(), {
  type: 'unordered',
})
</script>

<template>
  <component
    :is="type === 'unordered' ? 'ul' : 'ol'"
    class="list"
  >
    <slot>
      <li
        v-for="(item, index) in items"
        :key="index"
      >
        {{ item }}
      </li>
    </slot>
  </component>
</template>

<style scoped>
.list {
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}
.list > :deep(li) {
  padding: 0.25rem 0;
}
</style>
