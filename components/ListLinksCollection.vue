<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => {},
  },
  category: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <v-row>
    <v-col
      v-for="item in props.items"
      v-show="item.category === props.category"
      :key="item.id"
      cols="12"
      lg="6"
    >
      <v-card :href="item.url" target="_blank">
        <v-card-title>
          <v-chip class="mr-2" color="primary" variant="tonal">
            {{ item.overseas ? "海外" : "国内" }}
          </v-chip>
          {{ item.name }}
          <icons-open-in-new end size="x-small" />
        </v-card-title>
        <v-card-subtitle v-show="item.author">
          {{ item.author }}
        </v-card-subtitle>
        <v-card-text>
          {{ item.text }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
