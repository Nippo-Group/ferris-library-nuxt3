<script setup lang="ts">
import { useVisible } from '@/composables/common/useVisible'

export type Img = {
  src: string
  width: string
  height: string
  alt: string
  caption?: string
}

defineProps<Img>()

const { visible, show, dismiss } = useVisible()
</script>

<template>
  <VCard
    link
    @click="show()"
  >
    <VImg
      :src
      class="bg-grey-lighten-5"
      height="150"
    />
    <p class="text-center text-grey-darken-2">
      {{ caption }}
    </p>
  </VCard>
  <v-dialog
    v-model="visible"
    @click="dismiss"
  >
    <div class="d-flex justify-center">
      <VCard>
        <v-toolbar
          density="compact"
          color="white"
        >
          <v-toolbar-title v-if="caption">
            {{ caption }}
          </v-toolbar-title>
          <VSpacer />
          <v-btn
            icon
            color="black"
            density="compact"
            @click="dismiss"
          >
            <icons-close-defult />
          </v-btn>
        </v-toolbar>
        <VImg
          :src
          :width
          :height
          :alt
          @click.stop
        />
      </VCard>
    </div>
  </v-dialog>
</template>
