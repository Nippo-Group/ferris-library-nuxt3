<script setup lang="ts">
/**
 * @file 用語と説明が対になったリストの子要素を表示するためのコンポーネント
 * @description 親要素はPartsDescriptionListを使用する
 *
 * @props {string} term - 用語
 * @props {string} description - 説明
 */

defineProps<{
  term: string
  description: string
}>()
</script>

<template>
  <div class="item">
    <dt class="term">
      {{ term }}
    </dt>
    <dd class="description">
      <slot>{{ description }}</slot>
    </dd>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  flex-wrap: wrap;
}

.term,
.description {
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  align-items: center;
}

.term {
  flex: 0 0 33.333%;
  max-width: 33.333%;
  color: #b71c1c;
  background-color: #f6e2e2;
  word-break: break-word;
}

.description {
  flex: 1 1 0;
  margin: 0;
  min-width: 0;
  word-break: break-word;
}

@media (max-width: 768px) {
  .item {
    flex-direction: column;
  }

  .term,
  .description {
    flex: 1 0 100%;
    max-width: 100%;
  }
}
</style>
