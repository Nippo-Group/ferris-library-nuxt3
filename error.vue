<script setup lang="ts">
const error = useError()
</script>

<template>
  <VContainer>
    <PartsTitlePage>
      {{ error?.message }}
    </PartsTitlePage>

    <PartsBtnInside
      link="ホームへもどる"
      to="/"
      class="mb-2"
    />
    <PartsBtnInside
      link="Return to home page"
      to="/english"
      class="mb-2"
    />
  </VContainer>
</template>
