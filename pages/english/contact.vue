<template>
  <v-container>
    <text-page-title>{{ title }}</text-page-title>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="12" sm="8" md="6" lg="4">
        <card-contact :item="item"></card-contact>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageEnglishContact',
  layout: 'LayoutEnglish',
  data: () => ({
    title: 'Contact / Access',
    items: [
      {
        name: 'Ryokuen Library',
        addressNumber: '245-8651',
        address: '4-5-3 Ryokuen, Izumi-ku, Yokohama, 245-8651 Japan',
        googleMap: 'https://goo.gl/maps/EN6qf9SdPTx8woMv6',
        tel: '045 (812) 6999',
        fax: '045 (812) 9772',
        eMali: 'r_library@ferris.ac.jp',
        image: require(`@/assets/images/contact/contact-ryokuen.jpg`),
        accesses: [
          {
            transportation: 'Sotetsu Izumino Line',
            root: '「Ryokuen-toshi Station」3 minutes walk',
            icon: 'mdi-train',
          },
          {
            transportation: 'Kanachu Bus',
            root: '「Ferris」1 minutes walk',
            icon: 'mdi-train-car-passenger-variant',
          },
        ],
      },
      {
        name: 'Yamate Library',
        addressNumber: '231-8651',
        address: '37 Yamate-cho, Naka-ku, Yokohama, 231-8651 Japan',
        googleMap: 'https://goo.gl/maps/8KJm93i6qN7kL6Eb8',
        tel: '045 (681) 5149',
        fax: '045 (681) 5188',
        eMali: 'y_library@ferris.ac.jp',
        image: require(`@/assets/images/contact/contact-yamate.jpg`),
        accesses: [
          {
            transportation: 'JR-EAST Keihin Tohoku Line',
            root: '「Ishikawacho Station」10 minutes walk',
            icon: 'mdi-train',
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
}
</script>
