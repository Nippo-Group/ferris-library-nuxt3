<script setup lang="ts">
const tab = ref(null);
</script>

<template>
  <v-tabs v-model="tab" color="primary" grow>
    <v-tab>緑園本館</v-tab>
    <v-tab>山手分室</v-tab>
  </v-tabs>

  <v-window v-model="tab">
    <v-window-item>
      <the-pdf-viewer
        src="/documents/pamphlet/pamphlet_ryokuen.pdf"
      ></the-pdf-viewer>
    </v-window-item>
    <v-window-item>
      <the-pdf-viewer
        src="/documents/pamphlet/pamphlet_yamate.pdf"
      ></the-pdf-viewer>
    </v-window-item>
  </v-window>
</template>
