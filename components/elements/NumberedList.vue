<script setup lang="ts">
defineProps<{
  items: string[];
}>();
</script>

<template>
  <ol class="list">
    <li v-for="(item, index) in items" :key="index">
      {{ item }}
    </li>
  </ol>
</template>

<style scoped>
.list {
  list-style-type: none;
  counter-reset: num;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75em;
}
.list li {
  position: relative;
  padding-left: 3em;
  line-height: 2em;
}
.list li::before {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 2em;
  height: 2em;
  border-radius: 1em;
  background-color: #ef9a9a;
  color: white;
  font-weight: bold;
  text-align: center;
  counter-increment: num;
  content: counter(num);
}
</style>
