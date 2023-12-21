<script setup lang="ts">
export type Item = {
  label: string;
  value: string;
};
const props = defineProps<{
  items: Item[];
  modelValue?: string;
}>();
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const root = ref<HTMLElement>();
const { width } = useEventResize(root);

const sp = computed(() => {
  if (width.value) {
    return width.value < 500;
  } else {
    return true;
  }
});
</script>

<template>
  <div ref="root">
    <div
      v-if="!sp"
      class="d-flex align-center flex-column bg-grey-lighten-4 pa-1"
    >
      <v-btn-toggle
        v-model="value"
        divided
        color="primary"
        density="compact"
        mandatory
      >
        <v-btn v-for="item in items" :key="item.value" :value="item.value">
          {{ item.label }}
        </v-btn>
      </v-btn-toggle>
    </div>
    <v-select
      v-else
      v-model="value"
      label="年度"
      item-title="label"
      item-value="value"
      :items="items"
      variant="outlined"
    ></v-select>
  </div>
</template>
