<script setup lang="ts">
type State = {
  subTitle?: string;
};
defineProps<State>();
</script>

<template>
  <v-card height="100%">
    <v-card-title v-if="subTitle" class="text-red-lighten-3">
      {{ subTitle }}
    </v-card-title>
    <slot />
  </v-card>
</template>
