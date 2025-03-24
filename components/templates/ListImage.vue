<script setup lang="ts">
type Image = {
  src: string
  title?: string
  alt?: string
  num?: string
  prepend?: string
  append?: string
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
      <VCol
        v-for="(image, index) in images"
        :key="index"
        cols="6"
        md="4"
        lg="3"
      >
        <templates-card-image
          :src="image.src"
          :alt="image.alt || ''"
          height="100%"
          @click="lightboxShow(index)"
        >
          <template
            v-if="image.prepend || image.num"
            #prepend
          >
            <v-chip
              v-if="image.num"
              size="small"
              variant="tonal"
              class="mr-2"
            >
              {{ image.num }}
            </v-chip>
            {{ image.prepend }}
          </template>

          <template
            v-if="image.append"
            #append
          >
            {{ image.append }}
          </template>
        </templates-card-image>
      </VCol>
    </VRow>
  </VContainer>

  <templates-the-lightbox
    ref="lightboxComponent"
    :imgs="imgs"
  />
</template>
