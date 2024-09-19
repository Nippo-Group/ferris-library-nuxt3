<script setup lang="ts">
defineProps<{
  data: unknown;
}>();
</script>

<template>
  <div class="text" v-html="data"/>
</template>

<style scoped>
.text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.text::v-deep(h1) {
  font-size: 1.8rem;
  font-weight: bold;
}
.text::v-deep(h2) {
  font-size: 1.5rem;
  font-weight: bold;
}
.text::v-deep(h3) {
  font-size: 1.25rem;
  font-weight: bold;
}
.text::v-deep(h4) {
  font-size: 1.125rem;
}
.text::v-deep(h5) {
  font-size: 1rem;
}
.text::v-deep(h6) {
  font-size: 0.875rem;
}
.text::v-deep(ul),
.text::v-deep(ol) {
  padding-left: 1.5em;
}
.text::v-deep(dt) {
  font-weight: bold;
}
.text::v-deep(dd) {
  padding-left: 1em;
}
.text::v-deep(table) {
  display: block;
  border-spacing: 0;
  overflow-x: scroll;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
.text::v-deep(th),
.text::v-deep(td) {
  border: solid 1px #ddd;
  padding: 10px 5px;
}
.text::v-deep(th) {
  background-color: #eee;
}
.text::v-deep(img) {
  max-width: 100%;
  height: auto;
}
.text::v-deep(caption) {
  text-align: left;
}
</style>
