<script setup lang="ts">
import type { Img } from '@/components/elements/ImgDialog.vue'

defineProps<{
  imgs: Img[] }
>()
</script>

<template>
  <VItemGroup>
    <VContainer>
      <VRow>
        <VCol
          v-for="(img, i) in imgs"
          :key="i"
          cols="6"
          md="4"
        >
          <VItem>
            <elements-img-dialog
              :src="img.src"
              :width="img.width"
              :height="img.height"
              :alt="img.alt"
              :caption="img.caption"
            />
          </VItem>
        </VCol>
      </VRow>
    </VContainer>
  </VItemGroup>
</template>
