<script setup lang="ts">
defineProps<{
  title: string[];
  image: string;
}>();
</script>

<template>
  <v-card rounded="0">
    <v-img
      :src="image"
      class="text-white align-center"
      gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.7)"
      height="180px"
      cover
    >
      <v-card-title
        tag="h1"
        class="v-heading text-h5 text-sm-h4 page-title pt-8 mb-4"
      >
        <template v-for="(text, index) in title" :key="index">
          {{ text }}
          <wbr >
        </template>
      </v-card-title>
    </v-img>
  </v-card>
</template>
