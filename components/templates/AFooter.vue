<script setup lang="ts">
type State = {
  copyright: string
}
defineProps<State>()

const period = new Date().getFullYear()
</script>

<template>
  <v-footer color="primary">
    <v-col
      class="bg-primary text-center text-white"
      cols="12"
    >
      {{ period }} -
      <strong>{{ copyright }}</strong>
    </v-col>
  </v-footer>
</template>
