<script setup lang="ts">
const { visible, fileName, fileType, fileUrl, dismiss } = useConfirmDL()
</script>

<template>
  <VSnackbar
    v-model="visible"
    multi-line
  >
    {{ fileType }}ファイルを開きますか？<br>
    {{ fileName }}
    <template #actions>
      <VBtn
        class="mx-3"
        :href="fileUrl"
        target="_blank"
      >
        はい
        <icons-download-defult end>
          mdi-download
        </icons-download-defult>
      </VBtn>
      <VBtn
        icon
        @click="dismiss"
      >
        <icons-close-defult />
      </VBtn>
    </template>
  </VSnackbar>
</template>
