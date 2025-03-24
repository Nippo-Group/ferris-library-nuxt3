<script setup lang="ts">
type Props = {
  title: string
  content: string
  eyecatch?: string
  category?: string
  placeToExhibit?: string
}
defineProps<Props>()

const { visible, show, dismiss } = useVisible()
defineExpose({
  show,
})
</script>

<template>
  <v-dialog
    v-model="visible"
    scrollable
    max-width="800px"
  >
    <VCard>
      <v-img
        :src="eyecatch || undefined"
        height="160px"
        class="text-white align-end"
        gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.9)"
        cover
      >
        <VCardTitle class="wrap-text">
          <v-chip
            v-if="category"
            color="primary"
            class="mr-4"
          >
            {{ category }}
          </v-chip>
          {{ title }}
        </VCardTitle>
      </v-img>
      <VCardText class="content-body">
        <v-list-item v-if="placeToExhibit">
          <template #prepend>
            <icons-map-marker />
          </template>
          展示場所 ‐ {{ placeToExhibit }}
        </v-list-item>
        <v-divider />
        <v-list-item class="mt-8">
          <elements-html-text-area :data="content" />
        </v-list-item>
      </VCardText>
      <v-divider />
      <VCardActions>
        <VSpacer />
        <v-btn
          color="grey-darken-1"
          variant="text"
          @click="dismiss"
        >
          Close
        </v-btn>
      </VCardActions>
    </VCard>
  </v-dialog>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
.content-body {
  height: 1000px;
  max-height: 100%;
}
.content-body::v-deep(img) {
  max-width: 100%;
}
</style>
