<script setup lang="ts">
/**
 * PDF.js の共通ラッパー
 * - CMap の参照先をここで共通化する
 * - 画面ごとの差分は親コンポーネント側で扱う
 */
import { watch } from 'vue'

type Props = {
  src: string
  page: number
}

const props = defineProps<Props>()
const emit = defineEmits({
  'pages-change': (pages: number) => typeof pages === 'number',
})
const { $usePDF } = useNuxtApp()

const { pdf, pages } = $usePDF({
  url: props.src,
  cMapUrl: '/cmaps/',
  cMapPacked: true,
})

watch(
  pages,
  (nextPages) => {
    if (typeof nextPages === 'number')
      emit('pages-change', nextPages)
  },
  { immediate: true },
)
</script>

<template>
  <ClientOnly>
    <VuePDF
      class="w-100"
      :pdf="pdf"
      :page="page"
      fit-parent
    >
      <slot />
    </VuePDF>
  </ClientOnly>
</template>
