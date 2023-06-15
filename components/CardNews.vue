<script setup>
const props = defineProps({
  items: {
    type: Object,
    default: () => {},
  },
});
const items = reactive(props.items);
</script>

<template>
  <v-card tag="article">
    <v-card-item>
      <p class="text-primary mb-4">
        <icons-newspaper-variant></icons-newspaper-variant>
        News
      </p>
      <v-card-title tag="h1" class="card-title">
        {{ items.title }}
      </v-card-title>
      <v-card-subtitle>
        {{ dateFormat(items.date) }}
      </v-card-subtitle>
    </v-card-item>
    <div class="content-body">
      <v-card-text class="news-contents">
        <div v-html="items.contents"></div>
      </v-card-text>
      <v-card-actions v-if="items.actions" class="overflow-x-auto">
        <btn-inside
          v-if="items.actions && items.actions.link && items.actions.to"
          :link="items.actions.link"
          :to="items.actions.to"
        ></btn-inside>
        <btn-inside
          v-if="items.actions2 && items.actions2.link && items.actions2.to"
          :link="items.actions2.link"
          :to="items.actions2.to"
        ></btn-inside>
      </v-card-actions>
      <v-card-actions v-if="items.openinnew" class="overflow-x-auto">
        <btn-open-in-new
          v-if="items.openinnew && items.openinnew.link && items.openinnew.url"
          :link="items.openinnew.link"
          :url="items.openinnew.url"
        ></btn-open-in-new>
        <btn-open-in-new
          v-if="
            items.openinnew2 && items.openinnew2.link && items.openinnew2.url
          "
          :link="items.openinnew2.link"
          :url="items.openinnew2.url"
        ></btn-open-in-new>
      </v-card-actions>
    </div>
    <v-divider></v-divider>
    <v-card-actions class="justify-end">
      <v-btn variant="text" @click="$emit('dialogClose')">Close</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.card-title {
  text-overflow: inherit;
  white-space: unset;
}
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
.content-body {
  max-height: 80vh;
  overflow-y: scroll;
}
.news-contents::v-deep(h1) {
  display: none;
}
.news-contents::v-deep(h2) {
  font-size: 1rem;
  font-weight: bold;
}
.news-contents::v-deep(h3) {
  font-size: 1rem;
  font-weight: bold;
}
.news-contents::v-deep(h4) {
  font-size: 1rem;
  border-bottom: 1px solid currentColor;
}
.news-contents::v-deep(h5) {
  font-size: 1rem;
}
.news-contents::v-deep(h6) {
  font-size: 1rem;
}
.news-contents::v-deep(img) {
  max-width: 100%;
  height: auto;
}
.news-contents::v-deep(p) {
  margin-bottom: 1em;
}
.news-contents::v-deep(table) {
  display: block;
  border-spacing: 0;
  overflow-x: scroll;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
.news-contents::v-deep(th),
.news-contents::v-deep(td) {
  border: solid 1px #ddd;
  padding: 10px 5px;
}
.news-contents::v-deep(th) {
  background-color: #eee;
}
.news-contents::v-deep(dl),
.news-contents::v-deep(ul),
.news-contents::v-deep(ol) {
  padding-left: 1em;
  margin-bottom: 1em;
}
.news-contents::v-deep(dt) {
  font-weight: bold;
}
.news-contents::v-deep(dd) {
  padding-left: 1em;
}
</style>
