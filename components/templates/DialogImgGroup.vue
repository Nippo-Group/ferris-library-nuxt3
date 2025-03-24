<script setup lang="ts">
import type { Img } from '@/components/templates/DialogImg.vue'

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
            <TemplatesDialogImg
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
