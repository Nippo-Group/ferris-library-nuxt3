<script setup lang="ts">
const error = useError();
</script>

<template>
  <v-container>
    <text-page-title>
      {{ error?.message }}
    </text-page-title>

    <btn-inside link="ホームへもどる" to="/" class="mb-2"></btn-inside>
    <btn-inside
      link="Return to home page"
      to="/english"
      class="mb-2"
    ></btn-inside>
  </v-container>
</template>
