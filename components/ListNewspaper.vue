<template>
  <v-expansion-panels accordion focusable multiple>
    <v-expansion-panel
      v-for="(newspaper, index) in items"
      :key="'newspaper' + index"
    >
      <v-expansion-panel-header>
        <span v-if="!newspaper.subTitle">
          <v-icon left>mdi-newspaper-variant</v-icon>
          {{ newspaper.title }}
        </span>
        <span v-else class="newspaper-sub-title">
          <v-icon left>mdi-menu-right</v-icon>
          {{ newspaper.subTitle }}
        </span>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <list-newspaper-details :items="newspaper"></list-newspaper-details>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'ListNewspaper',
  props: {
    items: { type: Array, required: true },
  },
}
</script>

<style scoped>
.newspaper-sub-title {
  color: grey;
}
</style>
