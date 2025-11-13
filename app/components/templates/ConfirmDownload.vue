<script setup lang="ts">
import { useConfirmDL } from '@/composables/common/'
import { iconMap } from '@/utils'

const { visible, fileName, fileType, fileUrl, dismiss } = useConfirmDL()
</script>

<template>
  <VSnackbar
    v-model="visible"
    multi-line
  >
    {{ fileType }}ファイルを開きますか？<br>
    {{ fileName }}
    <template #actions>
      <VBtn
        class="mx-3"
        :href="fileUrl"
        target="_blank"
      >
        はい
        <VIcon
          :icon="iconMap['download']"
          end
        />
      </VBtn>
      <VBtn
        icon
        @click="dismiss"
      >
        <VIcon :icon="iconMap['close']" />
      </VBtn>
    </template>
  </VSnackbar>
</template>
