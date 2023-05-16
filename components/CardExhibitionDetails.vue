<template>
  <v-dialog v-model="dialog" scrollable max-width="800px">
    <v-card>
      <v-img
        :src="items.eyecatch ? items.eyecatch.url : ''"
        height="160px"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.9)"
      >
        <v-card-title>
          <v-chip v-if="items.category" color="primary" class="mr-4">
            {{ items.category.name }}
          </v-chip>
          {{ items.title }}
        </v-card-title></v-img
      >
      <v-card-text class="content-body">
        <v-list-item v-if="items.placeToExhibit">
          <template v-slot:prepend>
            <v-icon>mdi-map-marker</v-icon>
          </template>
          展示場所 ‐ {{ items.placeToExhibit.placeToExhibit }}
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item class="mt-8">
          <div v-html="items.content"></div>
        </v-list-item>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey darken-1" text @click="dialogSwitching()">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "CardExhibitionDetails",
  props: {
    items: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    dialogSwitching() {
      this.dialog = !this.dialog;
    },
  },
};
</script>

<style scoped>
.content-body {
  height: 1000px;
  max-height: 100%;
}
.content-body >>> img {
  max-width: 100%;
}
</style>
