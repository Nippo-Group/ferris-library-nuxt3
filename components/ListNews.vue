<script setup>
const props = defineProps({
  pagination: {
    type: Boolean,
    default: false,
  },
  contents: {
    type: Array,
    default: () => [],
  },
});

const nuxtApp = useNuxtApp();

const page = ref(1);
const pageSize = ref(10);
const pageLength = ref(1);
const publishContents = ref([]);
const filteredContents = ref([]);
const dialog = ref(false);
const dialogContent = ref({});

onMounted(() => {
  const mode = $route.query.mode ?? "public";
  let contents = props.contents;
  if (mode !== "private") {
    contents = contents.filter((element) => {
      return new Date() >= new Date(element.date);
    });
  }
  publishContents.value = contents;
  pageChange(page.value);
  pageLength.value = Math.ceil(publishContents.value.length / pageSize.value);
});

const pageChange = (pageNumber) => {
  filteredContents.value = publishContents.value.slice(
    pageSize.value * (pageNumber - 1),
    pageSize.value * pageNumber
  );
};
const dialogClose = () => {
  dialog.value = false;
};
</script>

<template>
  <v-card>
    <v-list>
      <template v-for="(content, index) in filteredContents" :key="content.id">
        <v-divider v-if="index !== 0"></v-divider>
        <v-list-item
          two-line
          link
          @click="(dialog = true), (dialogContent = content)"
        >
          <v-list-item-content>
            <v-list-item-title class="wrap-text">
              <span
                v-show="nuxtApp.$dayjs(content.date) > nuxtApp.$dayjs()"
                class="red--text text--lighten-2"
                >予約投稿：</span
              >
              {{ content.title }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ nuxtApp.$dayjs(content.date).format("YYYY年M月D日") }}
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
    <v-card-text v-if="props.pagination">
      <v-pagination
        v-model="page"
        :length="pageLength"
        @input="pageChange"
      ></v-pagination>
    </v-card-text>
    <v-dialog v-model="dialog" scrollable max-width="600">
      <card-news :items="dialogContent" @dialog-close="dialogClose"></card-news>
    </v-dialog>
  </v-card>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
