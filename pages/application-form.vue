<script setup>
import { mdiFilePdfBox, mdiFileWordOutline, mdiFile } from "@mdi/js";

const title = ref("各種申込書");
useSeoMeta({ title: title.value });

const confirmDialog = inject("confirmDialog");

const open = ref([
  "list0",
  "list1",
  "list2",
  "list3",
  "list4",
  "list5",
  "list6",
]);
const items = [
  {
    name: "リクエスト",
    target: "学部生・大学院生",
    files: [
      {
        name: "リクエストカード",
        url: "/documents/application-form/app-request.pdf",
        type: "PDF",
      },
    ],
  },
  {
    name: "緑園山手間資料取り寄せ",
    target: "全ての利用者",
    files: [
      {
        name: "山手分室取り寄せ連絡票",
        url: "/documents/application-form/app-send-yamate.pdf",
        type: "PDF",
        note: "山手から緑園に取り寄せる",
      },
      {
        name: "本館資料取り寄せ連絡票",
        url: "/documents/application-form/app-send-ryokuen.pdf",
        type: "PDF",
        note: "緑園から山手に取り寄せる",
      },
    ],
  },
  {
    name: "ILL文献複写",
    note: "他機関からのコピー取り寄せ",
    target: "学部生・大学院生・教職員	",
    files: [
      {
        name: "文献複写申込書",
        url: "/documents/application-form/app-copy.pdf",
        type: "PDF",
      },
    ],
  },
  {
    name: "ILL現物貸借",
    note: "他機関からの文献取り寄せ",
    target: "学部生・大学院生・教職員",
    files: [
      {
        name: "現物貸借申込書",
        url: "/documents/application-form/app-borrow.pdf",
        type: "PDF",
      },
    ],
  },
  {
    name: "国立国会図書館デジタル化資料複写",
    target: "学部生・大学院生・教職員	",
    files: [
      {
        name: "複写申込書",
        url: "/documents/application-form/app-copy.pdf",
        type: "PDF",
      },
    ],
  },
  {
    name: "ゼミ対象図書館ガイダンス",
    target: "教員",
    files: [
      {
        name: "ガイダンス申込書（PDF版）",
        url: "/documents/application-form/app-guidance.pdf",
        type: "PDF",
      },
      {
        name: "ガイダンス申込書（Word版）",
        url: "/documents/application-form/app-guidance.docx",
        type: "Word",
      },
    ],
  },
  {
    name: "新入生対象図書館ツアー",
    target: "教員",
    files: [
      {
        name: "図書館ツアー申込書（PDF版）",
        url: "/documents/application-form/app-tours.pdf",
        type: "PDF",
      },
      {
        name: "図書館ツアー申込書（Word版）",
        url: "/documents/application-form/app-tours.docx",
        type: "Word",
      },
    ],
  },
];
const fileIcon = (type) => {
  switch (type) {
    case "PDF":
      return mdiFilePdfBox;
    case "Word":
      return mdiFileWordOutline;
    default:
      return mdiFile;
  }
};
</script>

<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" md="10" lg="8" xl="6">
        <v-card>
          <v-list v-model:opened="open">
            <v-list-group
              v-for="(item, index) in items"
              :key="index"
              :value="`list${index}`"
            >
              <template #activator="{ props }">
                <v-list-item v-bind="props">
                  <v-list-item-title class="text-h6 text-primary wrap-text">
                    {{ item.name }}
                    <v-chip color="accent" size="small">
                      {{ item.target }}
                    </v-chip>
                    <v-chip v-if="item.date" variant="outlined" size="small">
                      {{ item.date }}
                    </v-chip>
                  </v-list-item-title>
                  <v-list-item-subtitle v-if="item.note" class="mt-1">
                    {{ item.note }}
                  </v-list-item-subtitle>
                </v-list-item>
              </template>
              <v-list-item
                v-for="(file, linkIndex) in item.files"
                :key="linkIndex"
                @click="confirmDialog(file.name, file.url, file.type)"
              >
                <v-list-item-title class="pl-4">
                  {{ file.name }}
                </v-list-item-title>
                <v-list-item-subtitle class="pl-4">
                  {{ file.note }}
                </v-list-item-subtitle>
                <template #append>
                  <v-icon>{{ fileIcon(file.type) }}</v-icon>
                </template>
              </v-list-item>
              <v-divider></v-divider>
            </v-list-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.wrap-text {
  word-break: break-all;
  white-space: normal;
}
</style>
