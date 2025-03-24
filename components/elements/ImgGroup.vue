<script setup lang="ts">
import type { Img } from '@/components/elements/ImgDialog.vue'

defineProps<{
  imgs: Img[] }
>()
</script>

<template>
  <v-item-group>
    <VContainer>
      <VRow>
        <VCol
          v-for="(img, i) in imgs"
          :key="i"
          cols="6"
          md="4"
        >
          <v-item>
            <elements-img-dialog
              :src="img.src"
              :width="img.width"
              :height="img.height"
              :alt="img.alt"
              :caption="img.caption"
            />
          </v-item>
        </VCol>
      </VRow>
    </VContainer>
  </v-item-group>
</template>
