<script setup lang="ts">
import { useVisible } from '@/composables/common'

defineProps<{
  title: string
}>()

const { visible, show, dismiss } = useVisible()
</script>

<template>
  <VBtn
    color="primary-lighten-1"
    variant="elevated"
    @click="show"
  >
    {{ title }}
    <VDialog
      v-model="visible"
      transition="dialog-top-transition"
      max-width="600"
    >
      <VCard>
        <VCardTitle class="mt-8 text-h5">
          {{ title }}
        </VCardTitle>
        <VCardText class="card-text">
          <slot name="contents">
            ダイアログカードの内容
          </slot>
        </VCardText>
        <VCardActions class="px-4">
          <slot name="actions" />
        </VCardActions>
        <VCardActions class="justify-end">
          <VBtn
            variant="tonal"
            @click="dismiss"
          >
            Close
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </VBtn>
</template>

<style scoped>
.card-text::v-deep(ul),
.card-text::v-deep(ol) {
  padding-left: 1.5em;
}
</style>
