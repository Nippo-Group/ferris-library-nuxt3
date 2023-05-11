<template>
  <v-card tag="article">
    <v-system-bar color="primary" dark> News </v-system-bar>
    <v-card-title tag="h1">
      {{ items.title }}
    </v-card-title>
    <v-card-subtitle v-text="$dayjs(items.date).format('YYYY年M月D日')">
    </v-card-subtitle>
    <div class="content-body">
      <v-card-text class="news-contents" v-html="items.contents"> </v-card-text>
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
      <v-btn text @click="$emit('dialogClose')">Close</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CardNews',
  props: {
    items: { type: Object, default: () => {} },
  },
  data: () => ({}),
}
</script>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
.content-body {
  max-height: 80vh;
  overflow-y: scroll;
}
.news-contents >>> h1 {
  display: none;
}
.news-contents >>> h2 {
  font-size: 1rem;
  font-weight: bold;
}
.news-contents >>> h3 {
  font-size: 1rem;
  font-weight: bold;
}
.news-contents >>> h4 {
  font-size: 1rem;
  border-bottom: 1px solid currentColor;
}
.news-contents >>> h5 {
  font-size: 1rem;
}
.news-contents >>> h6 {
  font-size: 1rem;
}
.news-contents >>> img {
  max-width: 100%;
  height: auto;
}
.news-contents >>> table {
  display: block;
  border-spacing: 0;
  overflow-x: scroll;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
.news-contents >>> th,
.news-contents >>> td {
  border: solid 1px #ddd;
  padding: 10px 5px;
}
.news-contents >>> th {
  background-color: #eee;
}
.news-contents >>> dt {
  font-weight: bold;
}
.news-contents >>> dd {
  padding-left: 1em;
}
</style>
