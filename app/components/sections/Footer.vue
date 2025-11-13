<script setup lang="ts">
type State = {
  copyright: string
}
defineProps<State>()

const period = new Date().getFullYear()
</script>

<template>
  <VFooter color="primary">
    <VCol
      class="bg-primary text-center text-white"
      cols="12"
    >
      {{ period }} -
      <strong>{{ copyright }}</strong>
    </VCol>
  </VFooter>
</template>
