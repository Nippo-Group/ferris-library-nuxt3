<script setup lang="ts">
import { converterMarkdown } from '~/utils/'

defineProps<{
  data?: string
  markdown?: string
}>()
</script>

<template>
  <article
    class="prose text"
    v-html="data || converterMarkdown(markdown || '')"
  />
</template>

<style scoped>
.text::v-deep(h1) {
  margin-bottom: 3rem;
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
.text::v-deep(p) {
  margin-bottom: 1rem;
}

.text::v-deep(ul),
.text::v-deep(ol) {
  padding-left: 2em;
  margin-bottom: 1rem;
}
.text::v-deep(img) {
  max-width: 100%;
  height: auto;
}
</style>
