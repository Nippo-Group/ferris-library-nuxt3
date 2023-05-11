<template>
  <card-reading-project :title="title">
    <v-container>
      <v-row>
        <v-col>
          <card-reading-project-detail sub-title="News">
          </card-reading-project-detail>
        </v-col>
      </v-row>
    </v-container>
  </card-reading-project>
</template>

<script>
export default {
  name: 'ActivityReport',
  data: () => ({
    title: '活動報告',
  }),
}
</script>
