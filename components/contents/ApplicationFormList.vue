<script setup lang="ts">
type File = {
  name: string;
  url: string;
  type: string;
  note?: string;
};
type Item = {
  name: string;
  target: string;
  note?: string;
  files: File[];
};
const items: Item[] = [
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
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, index) in items" :key="index" cols="12">
        <v-card>
          <v-card-title>
            {{ item.name }}
            <v-chip color="primary" variant="tonal">{{ item.target }}</v-chip>
          </v-card-title>
          <v-card-text v-if="item.note">
            {{ item.note }}
          </v-card-text>
          <templates-list-file :items="item.files"/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
