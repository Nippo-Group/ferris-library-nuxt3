<script setup lang="ts">
import { ref } from 'vue'
import { useConfirmDL } from '@/composables/common/'
import { iconMap } from '@/utils'

type Props = {
  src: string
  name?: string
  paginationHidden?: boolean
  buttonHidden?: boolean
}
const props = defineProps<Props>()

// プラグインから usePDF を取得
const { $pdf } = useNuxtApp()
const page = ref(1)
const { pdf, pages } = $pdf(props.src)

const { show } = useConfirmDL()

const fileName = computed(() => {
  return props.name ?? ' '
})
</script>

<template>
  <ClientOnly>
    <div class="d-flex flex-column ga-2">
      <VPagination
        v-if="pages > 1 && !paginationHidden"
        v-model="page"
        :length="pages"
      />
      <VSheet
        color="grey-lighten-5"
        class="pa-1"
      >
        <VuePDF
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
      </VSheet>
      <div class="text-center pa-1">
        <VBtn
          v-if="!buttonHidden"
          @click="show(fileName, props.src, 'PDF')"
        >
          ファイルをひらく
          <VIcon
            :icon="iconMap['pdf']"
            size="large"
            end
          />
        </VBtn>
      </div>
    </div>
  </ClientOnly>
</template>
