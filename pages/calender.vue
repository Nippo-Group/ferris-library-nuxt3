<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col cols="12" xl="8">
        <the-calender></the-calender>
      </v-col>
      <v-col>
        <info-covid-19></info-covid-19>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageCalender',
  data: () => ({
    title: '開館カレンダー・開館時間',
  }),
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
