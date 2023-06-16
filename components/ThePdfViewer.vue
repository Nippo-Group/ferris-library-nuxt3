<script setup lang="ts">
type State = {
  src: string;
  orientation?: "vertical" | "horizontal";
};
const props = defineProps<State>();

const width = ref<string>("100%");
const height = computed(() => {
  if (props.orientation === "horizontal") {
    return "800px";
  } else {
    return "660px";
  }
});
</script>

<template>
  <div>
    <iframe :src="src" width="100%" height="100%"></iframe>
  </div>
</template>

<style scoped>
iframe[src$=".pdf"] {
  width: v-bind(width);
  height: v-bind(height);
}
</style>
