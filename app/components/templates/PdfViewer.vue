<script setup lang="ts">
/**
 * PDF表示コンポーネント
 */
import { computed, ref } from 'vue'
import { useConfirmDL } from '@/composables/common/'
import { iconMap } from '@/utils'

type Props = {
  src: string
  name?: string
}
const props = defineProps<Props>()

const page = ref(1)
const pages = ref(0)

const { show } = useConfirmDL()

const fileName = computed(() => {
  return props.name ?? ' '
})
</script>

<template>
  <div class="d-flex flex-column ga-2">
    <VPagination
      v-if="pages > 1"
      v-model="page"
      :length="pages"
    />
    <VSheet
      color="grey-lighten-5"
      class="d-flex justify-center align-center pa-1 w-100"
    >
      <TemplatesPdfCanvas
        :src="props.src"
        :page="page"
        @pages-change="pages = $event"
      >
        <div>
          <VProgressLinear
            indeterminate
            color="primary"
          />
        </div>
      </TemplatesPdfCanvas>
    </VSheet>
    <div class="text-center pa-1">
      <VBtn
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
</template>
