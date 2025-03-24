<script setup lang="ts">
import { ref } from 'vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'

type State = {
  src: string
  name?: string
  paginationHidden?: boolean
  buttonHidden?: boolean
}
const props = defineProps<State>()

const page = ref(1)
const { pdf, pages } = usePDF(props.src)

const { show } = useConfirmDL()

const fileName = computed(() => {
  return props.name ? props.name : ' '
})
</script>

<template>
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
          <v-progress-linear
            indeterminate
            color="primary"
          />
        </div>
      </VuePDF>
    </VSheet>
    <div class="text-center pa-1">
      <v-btn
        v-if="!buttonHidden"
        @click="show(fileName, props.src, 'PDF')"
      >
        ファイルをひらく
        <icons-file-pdf end />
      </v-btn>
    </div>
  </div>
</template>
