<script setup>
const title = ref("学生向けパンフレット");
useSeoMeta({ title: title.value });

const tab = ref(null);
</script>

<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <p>在学生対象のパンフレットです</p>
    <v-row>
      <v-col cols="12" lg="10" xl="6">
        <v-tabs v-model="tab" color="primary" grow>
          <v-tab>緑園本館</v-tab>
          <v-tab>山手分室</v-tab>
        </v-tabs>

        <v-window v-model="tab">
          <v-window-item>
            <the-pdf-viewer
              src="/documents/pamphlet/pamphlet_ryokuen.pdf"
            ></the-pdf-viewer>
          </v-window-item>
          <v-window-item>
            <the-pdf-viewer
              src="/documents/pamphlet/pamphlet_yamate.pdf"
            ></the-pdf-viewer>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>
