<template>
  <div class="align-elements">
    <slot />
  </div>
</template>

<style scoped>
.align-elements {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.align-elements::v-deep(.v-btn ~ .v-btn) {
  margin-inline-start: 0;
}
</style>
