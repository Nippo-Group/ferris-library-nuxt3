<script setup lang="ts">
import { useConfirmDL } from "@/composable/utilities/useConfirmDL";

const title = "主な活動";
const mainActivity = [
  "本の展示",
  "POPコンテスト・創作コンクール",
  "選書ツアー",
  "朗読会",
  "各種イベントの実施",
];
const documents = [
  {
    name: "活動報告書",
    url: "/documents/reading-project/activity-report2020-2021.pdf",
    type: "PDF",
  },
  {
    name: "リーフレット",
    url: "/documents/reading-project/activity-introduction-leaflet.pdf",
    type: "PDF",
  },
];
const { show } = useConfirmDL();
</script>

<template>
  <templates-card-reading-project :title="title">
    <v-container>
      <v-row dense>
        <v-col cols="12" md="6">
          <elements-numbered-list :items="mainActivity" />
        </v-col>
        <v-col
          v-for="(document, index) in documents"
          :key="`document${index}`"
          cols="12"
          sm="6"
          md="3"
        >
          <elements-pdf-viewer
            :src="document.url"
            :button-hidden="true"
          ></elements-pdf-viewer>
          <v-btn
            block
            variant="text"
            @click="show(document.name, document.url, document.type)"
          >
            {{ document.name }}
            <icons-file-pdf end />
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </templates-card-reading-project>
</template>
