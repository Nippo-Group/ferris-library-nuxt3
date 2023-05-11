<template>
  <v-btn :href="url" target="_blank" class="btn-open-in-new">
    {{ link }}
    <v-icon right>mdi-open-in-new</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'BtnOpenInNew',
  props: {
    link: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.btn-open-in-new {
  text-transform: none;
}
</style>
