<script setup lang="ts">
type State = {
  name?: string;
};
defineProps<State>();
</script>

<template>
  <v-card variant="outlined" class="d-flex align-start flex-column">
    <v-card-title v-if="name" class="card-title">{{ name }}</v-card-title>
    <slot />
  </v-card>
</template>

<style scoped>
.card-title {
  white-space: normal;
}
</style>
