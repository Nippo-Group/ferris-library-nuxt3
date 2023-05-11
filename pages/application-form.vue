<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" md="10" lg="8" xl="6">
        <v-card>
          <v-list>
            <v-list-group
              v-for="(item, index) in items"
              :key="index"
              value="true"
            >
              <template #activator>
                <v-list-item-content>
                  <v-list-item-title class="wrap-text">
                    {{ item.name }}
                    <v-chip small color="primary lighten-2">
                      {{ item.target }}
                    </v-chip>
                    <v-chip v-if="item.date" small outlined>
                      {{ item.date }}
                    </v-chip>
                  </v-list-item-title>
                  <v-list-item-subtitle v-if="item.note">
                    {{ item.note }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="(file, linkIndex) in item.files"
                :key="linkIndex"
                @click="openConfirmDownload(file)"
              >
                <v-list-item-content>
                  <v-list-item-title class="pl-4">
                    {{ file.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="pl-4">
                    {{ file.note }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>{{ fileIcon(file.type) }}</v-icon>
                </v-list-item-icon>
              </v-list-item>
              <v-divider></v-divider>
            </v-list-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <confirm-download ref="confirmDownload" :file="openFile"></confirm-download>
  </v-container>
</template>

<script>
export default {
  name: 'ApplicationForm',
  data: () => ({
    title: '各種申込書',
    openFile: {},
    items: [
      {
        name: 'リクエスト',
        target: '学部生・大学院生',
        files: [
          {
            name: 'リクエストカード',
            url: '/documents/application-form/app-request.pdf',
            type: 'PDF',
          },
        ],
      },
      {
        name: '緑園山手間資料取り寄せ',
        target: '全ての利用者',
        files: [
          {
            name: '山手分室取り寄せ連絡票',
            url: '/documents/application-form/app-send-yamate.pdf',
            type: 'PDF',
            note: '山手から緑園に取り寄せる',
          },
          {
            name: '本館資料取り寄せ連絡票',
            url: '/documents/application-form/app-send-ryokuen.pdf',
            type: 'PDF',
            note: '緑園から山手に取り寄せる',
          },
        ],
      },
      {
        name: 'ILL文献複写',
        note: '他機関からのコピー取り寄せ',
        target: '学部生・大学院生・教職員	',
        files: [
          {
            name: '文献複写申込書',
            url: '/documents/application-form/app-copy.pdf',
            type: 'PDF',
          },
        ],
      },
      {
        name: 'ILL現物貸借',
        note: '他機関からの文献取り寄せ',
        target: '学部生・大学院生・教職員',
        files: [
          {
            name: '現物貸借申込書',
            url: '/documents/application-form/app-borrow.pdf',
            type: 'PDF',
          },
        ],
      },
      {
        name: '国立国会図書館デジタル化資料複写',
        target: '学部生・大学院生・教職員	',
        files: [
          {
            name: '複写申込書',
            url: '/documents/application-form/app-copy.pdf',
            type: 'PDF',
          },
        ],
      },
      {
        name: 'ゼミ対象図書館ガイダンス',
        target: '教員',
        files: [
          {
            name: 'ガイダンス申込書（PDF版）',
            url: '/documents/application-form/app-guidance.pdf',
            type: 'PDF',
          },
          {
            name: 'ガイダンス申込書（Word版）',
            url: '/documents/application-form/app-guidance.docx',
            type: 'Word',
          },
        ],
      },
      {
        name: '新入生対象図書館ツアー',
        target: '教員',
        files: [
          {
            name: '図書館ツアー申込書（PDF版）',
            url: '/documents/application-form/app-tours.pdf',
            type: 'PDF',
          },
          {
            name: '図書館ツアー申込書（Word版）',
            url: '/documents/application-form/app-tours.docx',
            type: 'Word',
          },
        ],
      },
    ],
  }),
  head() {
    return {
      title: this.title,
    }
  },
  methods: {
    openConfirmDownload(content) {
      this.openFile = content
      this.$refs.confirmDownload.dialogOpen()
    },
    fileIcon(type) {
      switch (type) {
        case 'PDF':
          return 'mdi-file-pdf-box'
        case 'Word':
          return 'mdi-file-word-outline'
        default:
          return 'mdi-file'
      }
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
