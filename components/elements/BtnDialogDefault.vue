<script setup lang="ts">
defineProps<{
  title: string;
}>();

const { visible, show, dismiss } = useVisible();
</script>

<template>
  <v-btn color="primary-lighten-1" variant="elevated" @click="show">
    {{ title }}
    <v-dialog
      v-model="visible"
      transition="dialog-top-transition"
      max-width="600"
    >
      <v-card>
        <v-card-title class="mt-8 text-h5"> {{ title }} </v-card-title>
        <v-card-text class="card-text">
          <slot name="contents">ダイアログカードの内容</slot>
        </v-card-text>
        <v-card-actions class="px-4">
          <slot name="actions"></slot>
        </v-card-actions>
        <v-card-actions class="justify-end">
          <v-btn variant="tonal" @click="dismiss">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-btn>
</template>

<style scoped>
.card-text::v-deep(ul),
.card-text::v-deep(ol) {
  padding-left: 1.5em;
}
</style>
