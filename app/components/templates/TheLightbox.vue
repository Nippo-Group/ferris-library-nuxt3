<script setup lang="ts">
export type ImgsObj = {
  src: string
  title?: string
  alt?: string
}
type State = {
  imgs: string | string[] | ImgsObj[]
}
const props = defineProps<State>()

const visibleRef = ref(false)
const indexRef = ref(0)

const onHide = () => (visibleRef.value = false)
const onShow = (index: number): void => {
  indexRef.value = index
  visibleRef.value = true
}
defineExpose({
  onShow,
})
</script>

<template>
  <client-only>
    <vue-easy-lightbox
      :visible="visibleRef"
      :index="indexRef"
      :imgs="props.imgs"
      :loop="true"
      class="vue-easy-lightbox"
      @hide="onHide"
    />
  </client-only>
</template>

<style scoped>
.vue-easy-lightbox::v-deep(.vel-img-title) {
  font-size: 1.2rem;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 0.2em;
}
</style>
