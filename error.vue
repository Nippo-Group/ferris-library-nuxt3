<script setup lang="ts">
const error = useError();
</script>

<template>
  <v-container>
    <elements-text-page-title>
      {{ error?.message }}
    </elements-text-page-title>

    <elements-btn-inside
      link="ホームへもどる"
      to="/"
      class="mb-2"
    ></elements-btn-inside>
    <elements-btn-inside
      link="Return to home page"
      to="/english"
      class="mb-2"
    ></elements-btn-inside>
  </v-container>
</template>
