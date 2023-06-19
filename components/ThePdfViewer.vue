<script setup lang="ts">
type State = {
  src: string;
  orientation?: "vertical" | "horizontal";
  width?: string;
  height?: string;
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
</script>

<template>
  <div>
    <iframe :src="src" width="100%" height="100%" class="pdf-frame"></iframe>
  </div>
</template>

<style scoped>
.pdf-frame {
  aspect-ratio: v-bind(aspectRatio);
  width: 100%;
  max-width: v-bind(maxWidth);
  height: 100%;
  max-height: v-bind(maxHeight);
}
</style>
