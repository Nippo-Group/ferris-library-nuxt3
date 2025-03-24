<script setup lang="ts">
const tab = ref(null)
</script>

<template>
  <VTabs
    v-model="tab"
    color="primary"
    grow
  >
    <VTab>緑園本館</VTab>
    <VTab>山手分室</VTab>
  </VTabs>

  <VWindow v-model="tab">
    <VWindowItem>
      <client-only>
        <templates-pdf-viewer
          src="/documents/pamphlet/pamphlet_ryokuen.pdf"
        />
      </client-only>
    </VWindowItem>
    <VWindowItem>
      <client-only>
        <templates-pdf-viewer
          src="/documents/pamphlet/pamphlet_yamate.pdf"
        />
      </client-only>
    </VWindowItem>
  </VWindow>
</template>
