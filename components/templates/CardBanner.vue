<script setup lang="ts">
defineProps<{
  href: string;
  img: string;
  title: string;
  height: string;
}>();
</script>

<template>
  <v-card :href="href" target="_blank" dark>
    <v-img
      :src="img"
      class="align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      :height="height"
      cover
    >
      <v-card-title class="text-white">
        {{ title }}
        <icons-open-in-new/>
      </v-card-title>
    </v-img>
  </v-card>
</template>
