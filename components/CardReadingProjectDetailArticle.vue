<template>
  <v-card outlined class="d-flex align-start flex-column">
    <v-card-title v-if="name">{{ name }}</v-card-title>
    <slot />
  </v-card>
</template>

<script>
export default {
  name: 'CardReadingProjectDetailArticle',
  props: {
    name: { type: String, default: '' },
  },
}
</script>
