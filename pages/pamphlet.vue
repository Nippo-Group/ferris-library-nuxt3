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
            <display-pdf
              location="/documents/pamphlet/pamphlet_ryokuen.pdf"
            ></display-pdf>
          </v-window-item>
          <v-window-item>
            <display-pdf
              location="/documents/pamphlet/pamphlet_yamate.pdf"
            ></display-pdf>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PagePamphlet",
  data: () => ({
    title: "学生向けパンフレット",
    tab: null,
  }),
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
