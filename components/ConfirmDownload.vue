<script setup lang="ts">
const name = ref<string>("");
const url = ref<string>("");
const type = ref<string>("");

const dialog = ref<boolean>(false);
const timeout = 6000;

watch(dialog, () => {
  if (dialog.value === false) {
    name.value = "";
    url.value = "";
    type.value = "";
  }
});

const dialogOpen = (
  fileName: string,
  fileUrl: string,
  fileType: string
): void => {
  if (fileName && fileUrl && fileType) {
    name.value = fileName;
    url.value = fileUrl;
    type.value = fileType;
    dialog.value = true;
  }
};
defineExpose({
  dialogOpen,
});
</script>

<template>
  <v-snackbar v-model="dialog" multi-line :timeout="timeout">
    {{ type }}ファイルを開きますか？<br />
    {{ name }}
    <template #actions>
      <v-btn class="mx-3" :href="url" target="_blank">
        はい
        <icons-download-defult end>mdi-download</icons-download-defult>
      </v-btn>
      <v-btn icon @click="dialog = false">
        <icons-close-defult></icons-close-defult>
      </v-btn>
    </template>
  </v-snackbar>
</template>
