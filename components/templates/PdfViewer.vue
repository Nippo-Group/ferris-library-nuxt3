<script setup lang="ts">
import { ref } from "vue";
import { VuePDF, usePDF } from "@tato30/vue-pdf";
import { useConfirmDL } from "@/composable/utilities/useConfirmDL";

type State = {
  src: string;
  name?: string;
  paginationHidden?: boolean;
  buttonHidden?: boolean;
};
const props = defineProps<State>();

const page = ref(1);
const { pdf, pages } = usePDF(props.src);

const { show } = useConfirmDL();

const fileName = computed(() => {
  return props.name ? props.name : " ";
});
</script>

<template>
  <v-container>
    <v-row dense>
      <v-col :cols="12">
        <v-pagination
          v-if="pages > 1 && !paginationHidden"
          v-model="page"
          :length="pages"
        ></v-pagination>
      </v-col>
      <v-col :cols="12">
        <v-sheet color="grey-lighten-5" class="pa-1">
          <VuePDF :pdf="pdf" :page="page" fit-parent>
            <div>
              <v-progress-linear
                indeterminate
                color="primary"
              ></v-progress-linear>
            </div>
          </VuePDF>
        </v-sheet>
      </v-col>
      <v-col :cols="12" class="text-center">
        <v-btn v-if="!buttonHidden" @click="show(fileName, props.src, 'PDF')">
          ファイルをひらく
          <icons-file-pdf end />
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
