<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="8">
        <v-toolbar dense outlined flat rounded>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="reverseOrder()">
            <v-icon>mdi-sort</v-icon>
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>
    <transition-group tag="div" class="row">
      <v-col
        v-for="content in contents"
        :key="content.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
      >
        <v-card height="100%" @click="openDitails(content)">
          <v-img
            :src="content.eyecatch ? content.eyecatch.url : ''"
            height="160px"
            class="eyecatch"
          >
            <v-card-text>
              <v-chip v-if="content.category" color="primary">
                {{ content.category.name }}
              </v-chip>
            </v-card-text>
          </v-img>
          <v-card-title>
            {{ content.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ $dayjs(content.date).format('YYYY年M月D日') }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </transition-group>
    <card-exhibition-details
      ref="cardExhibitionDetails"
      :items="items"
    ></card-exhibition-details>
  </v-container>
</template>

<script>
export default {
  name: 'PageExhibition',
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: 'exhibition',
      queries: { orders: '-date' },
    })
    return data
  },
  data: () => ({
    title: '企画展示',
    show: false,
    items: {},
  }),
  head() {
    return {
      title: this.title,
    }
  },
  methods: {
    openDitails(content) {
      this.items = content
      this.$refs.cardExhibitionDetails.dialogSwitching()
    },
    reverseOrder() {
      this.contents.reverse()
    },
  },
}
</script>

<style scoped>
.v-card:hover .eyecatch {
  transition: filter 0.4s ease-in-out;
  filter: grayscale(60%);
}
.eyecatch {
  filter: grayscale(0%);
}
.v-move {
  transition: transform 1s;
}
</style>
