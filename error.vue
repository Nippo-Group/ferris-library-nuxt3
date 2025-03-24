<script setup lang="ts">
const error = useError()
</script>

<template>
  <VContainer>
    <PartsHeaderLv1>
      {{ error?.message }}
    </PartsHeaderLv1>

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
  </VContainer>
</template>
