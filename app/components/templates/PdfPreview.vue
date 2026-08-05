<script setup lang="ts">
/**
 * PDFファイルを小さくプレビューするためのコンポーネント
 */
import { ref } from 'vue'
import { useConfirmDL } from '@/composables/common/'
import { iconMap } from '@/utils'

type Props = {
  src: string
  name?: string
}
const props = defineProps<Props>()

// プラグインから usePDF を取得
const { $usePDF } = useNuxtApp()
const page = ref(1)
const { pdf, pages } = $usePDF(props.src)

const { show } = useConfirmDL()

const fileName = computed(() => {
  return props.name ?? ' '
})
</script>

<template>
  <ClientOnly>
    <VCard variant="flat">
        <VuePDF
          class="w-100"
          :pdf="pdf"
          :page="page"
          fit-parent
        >
          <div>
            <VProgressLinear
              indeterminate
              color="primary"
            />
          </div>

        </VuePDF>
      <VCardActions>
        <VBtn
          size="small"
          variant="outlined"
          color="primary"
          block
          @click="show(fileName, props.src, 'PDF')"
        >
          ファイルをひらく
          <VIcon
            :icon="iconMap['pdf']"
            size="x-large"
            end
          />
        </VBtn>
      </VCardActions>
    </VCard>
  </ClientOnly>
</template>
