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

const page = ref(1)

const { show } = useConfirmDL()

const fileName = computed(() => {
  return props.name ?? ' '
})
</script>

<template>
  <VCard variant="flat">
    <TemplatesPdfCanvas
      :src="props.src"
      :page="page"
    >
      <div>
        <VProgressLinear
          indeterminate
          color="primary"
        />
      </div>
    </TemplatesPdfCanvas>
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
</template>
