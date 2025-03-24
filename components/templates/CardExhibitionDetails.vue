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
  <VDialog
    v-model="visible"
    scrollable
    max-width="800px"
  >
    <VCard>
      <VImg
        :src="eyecatch || undefined"
        height="160px"
        class="text-white align-end"
        gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.9)"
        cover
      >
        <VCardTitle class="wrap-text">
          <VChip
            v-if="category"
            color="primary"
            class="mr-4"
          >
            {{ category }}
          </VChip>
          {{ title }}
        </VCardTitle>
      </VImg>
      <VCardText class="content-body">
        <VListItem v-if="placeToExhibit">
          <template #prepend>
            <icons-map-marker />
          </template>
          展示場所 ‐ {{ placeToExhibit }}
        </VListItem>
        <VDivider />
        <VListItem class="mt-8">
          <PartsHtmlTextArea :data="content" />
        </VListItem>
      </VCardText>
      <VDivider />
      <VCardActions>
        <VSpacer />
        <VBtn
          color="grey-darken-1"
          variant="text"
          @click="dismiss"
        >
          Close
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
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
