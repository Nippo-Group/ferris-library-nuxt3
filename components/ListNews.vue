<template>
  <v-card>
    <v-list>
      <template v-for="(content, index) in filteredContents">
        <v-divider v-if="index !== 0" :key="'divider' + content.id"></v-divider>
        <v-list-item
          :key="content.id"
          two-line
          link
          @click.native=";(dialog = true), (dialogContent = content)"
        >
          <v-list-item-content>
            <v-list-item-title class="wrap-text">
              <span
                v-show="$dayjs(content.date) > $dayjs()"
                class="red--text text--lighten-2"
                >予約投稿：</span
              >
              {{ content.title }}
            </v-list-item-title>
            <v-list-item-subtitle
              v-text="$dayjs(content.date).format('YYYY年M月D日')"
            >
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon color="grey lighten-1"
              >mdi-arrow-right-circle-outline</v-icon
            >
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
    <v-card-text v-if="pagination">
      <v-pagination
        v-model="page"
        :length="pageLength"
        @input="pageChange"
      ></v-pagination>
    </v-card-text>
    <v-dialog v-model="dialog" scrollable max-width="600">
      <card-news :items="dialogContent" @dialogClose="dialogClose"></card-news>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: 'ListNews',
  props: {
    pagination: { type: Boolean, default: false },
    contents: { type: Array, default: () => [] },
  },
  data: () => ({
    page: 1,
    pageSize: 10,
    pageLength: 1,
    publishContents: [],
    filteredContents: [],
    dialog: false,
    dialogContent: {},
  }),
  mounted() {
    const mode = this.$route.query.mode ?? 'public'
    let contents = this.contents
    if (mode !== 'private') {
      contents = contents.filter((element) => {
        return new Date() >= new Date(element.date)
      })
    }
    this.publishContents = contents
    this.pageChange(this.page)
    this.pageLength = Math.ceil(this.publishContents.length / this.pageSize)
  },
  methods: {
    pageChange(pageNumber) {
      this.filteredContents = this.publishContents.slice(
        this.pageSize * (pageNumber - 1),
        this.pageSize * pageNumber
      )
    },
    dialogClose() {
      this.dialog = false
    },
  },
}
</script>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
