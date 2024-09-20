<script setup lang="ts">
const { visible, fileName, fileType, fileUrl, dismiss } = useConfirmDL();
</script>

<template>
  <v-snackbar v-model="visible" multi-line>
    {{ fileType }}ファイルを開きますか？<br >
    {{ fileName }}
    <template #actions>
      <v-btn class="mx-3" :href="fileUrl" target="_blank">
        はい
        <icons-download-defult end>mdi-download</icons-download-defult>
      </v-btn>
      <v-btn icon @click="dismiss">
        <icons-close-defult/>
      </v-btn>
    </template>
  </v-snackbar>
</template>
