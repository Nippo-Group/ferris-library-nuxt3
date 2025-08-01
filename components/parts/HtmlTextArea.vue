<script setup lang="ts">
import { converterMarkdown } from '~/utils/'

defineProps<{
  data?: string
  markdown?: string
}>()
</script>

<template>
  <article
    class="text"
    v-html="data || converterMarkdown(markdown || '')"
  />
</template>

<style scoped>
.text::v-deep(*) {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.text::v-deep(h1) {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.text::v-deep(h2) {
  margin-top: 3rem;
}
.text::v-deep(h3) {
  margin-top: 2rem;
}
.text::v-deep(h4) {
  margin-top: 1rem;
}
.text::v-deep(h5) {
  margin-top: 1rem;
}
.text::v-deep(h6) {
  margin-top: 1rem;
}
.text::v-deep(img) {
  max-width: 100%;
  height: auto;
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
</style>
