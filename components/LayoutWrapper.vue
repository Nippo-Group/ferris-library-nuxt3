<script setup lang="ts">
const drawer: Ref<boolean | null> = ref(null);
provide("drawer", drawer);

const confirmRef = ref();
const confirmDialog = (
  fileName: string,
  fileUrl: string,
  fileType: string
): void => {
  confirmRef.value.dialogOpen(fileName, fileUrl, fileType);
};
provide("confirmDialog", confirmDialog);
</script>

<template>
  <v-app id="inspire">
    <layout-header></layout-header>
    <layout-navigation-drawer v-model="drawer"></layout-navigation-drawer>
    <v-main>
      <slot />
    </v-main>
    <layout-footer></layout-footer>
    <layout-to-top></layout-to-top>
    <confirm-download ref="confirmRef"></confirm-download>
  </v-app>
</template>
