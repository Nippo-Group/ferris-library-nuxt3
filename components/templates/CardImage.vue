<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
}>();
</script>

<template>
  <v-card elevation="0" color="grey-lighten-4">
    <v-card-text v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </v-card-text>
    <v-img :src="src" :alt="alt" aspect-ratio="1">
      <template #placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <v-card-text v-if="$slots.append">
      <slot name="append"></slot>
    </v-card-text>
  </v-card>
</template>
