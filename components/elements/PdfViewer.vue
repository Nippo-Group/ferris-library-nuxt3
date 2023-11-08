<script setup lang="ts">
import { useConfirmDL } from "@/composable/utilities/useConfirmDL";

type State = {
  src: string;
  name?: string;
  orientation?: "vertical" | "horizontal";
  width?: string;
  height?: string;
  buttonHidden?: boolean;
};
const props = defineProps<State>();

const aspectRatio = computed(() => {
  if (props.orientation === "vertical") {
    return "3 / 4";
  } else {
    return "4 / 3";
  }
});
const maxWidth = computed(() => (props.width ? props.width : "100vw"));
const maxHeight = computed(() => (props.height ? props.height : "100vh"));

const { show } = useConfirmDL();

const fileName = computed(() => {
  return props.name ? props.name : " ";
});
</script>

<template>
  <v-sheet>
    <iframe
      :src="props.src"
      width="100%"
      height="100%"
      class="pdf-frame"
    ></iframe>
    <div v-if="!props.buttonHidden" class="btn-wrapper">
      <v-btn @click="show(fileName, props.src, 'PDF')">
        ファイルをひらく
        <icons-file-pdf end />
      </v-btn>
    </div>
  </v-sheet>
</template>

<style scoped>
.pdf-frame {
  aspect-ratio: v-bind(aspectRatio);
  width: 100%;
  max-width: v-bind(maxWidth);
  height: 100%;
  max-height: v-bind(maxHeight);
}
.btn-wrapper {
  text-align: center;
  padding: 8px;
}
</style>
