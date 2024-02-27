<script setup lang="ts">
type State = {
  title?: string;
};
defineProps<State>();
</script>

<template>
  <v-card height="100%">
    <v-card-title v-if="title" class="text-red-lighten-3">
      {{ title }}
    </v-card-title>
    <slot />
  </v-card>
</template>

<style scoped>
.title-custom {
  overflow-wrap: break-word;
}
</style>
