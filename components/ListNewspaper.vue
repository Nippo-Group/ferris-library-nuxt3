<script setup>
const props = defineProps({
  items: { type: Array, required: true },
});
</script>

<template>
  <v-expansion-panels variant="accordion" multiple>
    <v-expansion-panel
      v-for="(newspaper, index) in props.items"
      :key="'newspaper' + index"
    >
      <v-expansion-panel-title>
        <span v-if="!newspaper.subTitle">
          <icons-newspaper-variant start />
          {{ newspaper.title }}
        </span>
        <span v-else class="newspaper-sub-title">
          <icons-menu-right start />
          {{ newspaper.subTitle }}
        </span>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <list-newspaper-details :items="newspaper"></list-newspaper-details>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped>
.newspaper-sub-title {
  color: grey;
}
</style>
