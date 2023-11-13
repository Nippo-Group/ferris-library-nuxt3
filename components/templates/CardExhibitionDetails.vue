<script setup lang="ts">
import { useVisible } from "@/composable/utilities/useVisible";

type Props = {
  title: string;
  content: string;
  eyecatch?: string;
  category?: string;
  placeToExhibit?: string;
};
defineProps<Props>();

const { visible, show, dismiss } = useVisible();
defineExpose({
  show,
});
</script>

<template>
  <v-dialog v-model="visible" scrollable max-width="800px">
    <v-card>
      <v-img
        :src="eyecatch || undefined"
        height="160px"
        class="text-white align-end"
        gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.9)"
        cover
      >
        <v-card-title>
          <v-chip v-if="category" color="primary" class="mr-4">
            {{ category }}
          </v-chip>
          {{ title }}
        </v-card-title></v-img
      >
      <v-card-text class="content-body">
        <v-list-item v-if="placeToExhibit">
          <template #prepend>
            <icons-map-marker />
          </template>
          展示場所 ‐ {{ placeToExhibit }}
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item class="mt-8">
          <div v-html="content"></div>
        </v-list-item>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey-darken-1" variant="text" @click="dismiss">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.content-body {
  height: 1000px;
  max-height: 100%;
}
.content-body::v-deep(img) {
  max-width: 100%;
}
</style>
