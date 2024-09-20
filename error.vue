<script setup lang="ts">
const error = useError();
</script>

<template>
  <v-container>
    <elements-header-lv1>
      {{ error?.message }}
    </elements-header-lv1>

    <elements-btn-inside
      link="ホームへもどる"
      to="/"
      class="mb-2"
    />
    <elements-btn-inside
      link="Return to home page"
      to="/english"
      class="mb-2"
    />
  </v-container>
</template>
