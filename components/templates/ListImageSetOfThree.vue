<script setup lang="ts">
type Image = {
  src: string
  title: string
  alt: string
  cover: string
  text?: string
  num?: string
}
const props = defineProps<{
  images: Image[]
}>()
// Lightbox用
const lightboxComponent = ref()
const imgs = computed(() => {
  return props.images.map((value) => {
    return {
      src: value.src,
      title: value.title,
      alt: value.alt,
    }
  })
})
const lightboxShow = (index: number): void => {
  lightboxComponent.value.onShow(index)
}
</script>

<template>
  <VContainer>
    <VRow dense>
      <template
        v-for="(image, index) in images"
        :key="index"
      >
        <VCol
          v-if="image.cover"
          cols="12"
        >
          <v-card
            elevation="0"
            class="mt-4"
          >
            <v-card-title>
              {{ image.title }}
            </v-card-title>
            <v-card-text>
              <p>{{ image.text }}</p>
              <p v-if="image.num">
                請求番号： {{ image.num }}
              </p>
            </v-card-text>
          </v-card>
        </VCol>
        <VCol cols="4">
          <templates-card-image
            :src="image.src"
            :alt="image.alt"
            @click="lightboxShow(index)"
          />
        </VCol>
      </template>
    </VRow>
  </VContainer>

  <templates-the-lightbox
    ref="lightboxComponent"
    :imgs="imgs"
  />
</template>
