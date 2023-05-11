<template>
  <div>
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="12" xl="8">
        <v-card>
          <v-container>
            <v-row dense>
              <v-col cols="12" sm="4">
                <v-card-title>{{ item.name }}</v-card-title>
                <v-card-text>
                  <v-chip
                    v-for="(language, m) in item.languages"
                    :key="'lang' + m"
                    small
                    color="secondary"
                    class="mb-1 mr-1"
                    >{{ language }}</v-chip
                  >
                  <v-chip
                    v-for="(cat, j) in item.categories"
                    :key="'cat' + j"
                    small
                    color="blue lighten-1"
                    text-color="white"
                    class="mb-1 mr-1"
                  >
                    {{ cat }}
                  </v-chip>
                </v-card-text>
              </v-col>
              <v-col cols="12" sm="8">
                <v-card-text>
                  <div class="explanation" v-html="item.explanation"></div>
                  <div v-if="item.feature">
                    <v-chip small>特長</v-chip>
                    <div v-html="item.feature"></div>
                  </div>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text v-if="item.access">
                  <p class="my-0">
                    利用可能場所：
                    <span v-for="(place, p) in item.available" :key="'ava' + p">
                      {{ place }}
                    </span>
                  </p>
                  <p class="my-0">
                    同時アクセス数：{{ item.access }}
                    <span v-if="item.logout" class="orange--text ml-2">
                      <v-icon small color="orange"
                        >mdi-alert-circle-outline</v-icon
                      >
                      利用後は必ずログアウトしてください
                    </span>
                  </p>
                  <span v-if="item.attention">※{{ item.attention }}</span>
                </v-card-text>
                <v-card-actions class="flex-wrap">
                  <btn-open-in-new
                    v-for="(link, k) in item.links"
                    :key="'link' + k"
                    class="mb-2 mb-sm-0"
                    :link="link.name"
                    :url="link.url"
                  ></btn-open-in-new>
                  <template v-if="item.documents">
                    <v-btn
                      v-for="(file, n) in item.documents"
                      :key="'file' + n"
                      class="mb-2 mb-sm-0"
                      @click.native="openConfirmDownload(file)"
                    >
                      {{ file.name }}
                      <v-icon v-if="file.type == 'PDF'" dark right
                        >mdi-file-pdf-box</v-icon
                      >
                      <v-icon v-else-if="file.type == 'Excel'" dark right
                        >mdi-file-excel-outline</v-icon
                      >
                      <v-icon v-else dark right
                        >mdi-file-document-multiple-outline</v-icon
                      >
                    </v-btn>
                  </template>
                  <!--<v-btn icon absolute bottom right
                    ><v-icon>mdi-heart-outline</v-icon></v-btn
                  >-->
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <confirm-download ref="confirmDownload" :file="openFile"></confirm-download>
  </div>
</template>

<script>
export default {
  name: 'ListDatabase',
  props: {
    items: { type: Array, required: true },
  },
  data: () => ({
    openFile: {},
  }),
  methods: {
    openConfirmDownload(content) {
      this.openFile = content
      this.$refs.confirmDownload.dialogOpen()
    },
  },
}
</script>

<style scoped>
.explanation >>> caption {
  text-align: left;
}
.explanation >>> p {
  margin-bottom: 0.5em;
}
.explanation >>> table {
  border-collapse: collapse;
}
.explanation >>> th,
.explanation >>> td {
  text-align: left;
  vertical-align: top;
  border-top: gray solid 1px;
  border-bottom: gray solid 1px;
}
</style>
