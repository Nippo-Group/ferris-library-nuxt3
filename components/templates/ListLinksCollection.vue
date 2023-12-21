<script setup lang="ts">
type Item = {
  name: string;
  url: string;
  category: string;
  overseas: boolean;
  author: string;
  text: string;
};
type State = {
  items: Item[];
  category: string;
};
const props = defineProps<State>();
</script>

<template>
  <v-row>
    <v-col
      v-for="(item, index) in props.items"
      v-show="item.category === props.category"
      :key="index"
      cols="12"
      lg="6"
    >
      <v-card :href="item.url" target="_blank">
        <v-card-title>
          <v-chip class="mr-2" color="primary" variant="tonal">
            {{ item.overseas ? "海外" : "国内" }}
          </v-chip>
          <span class="wrap-text">{{ item.name }}</span>
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

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
