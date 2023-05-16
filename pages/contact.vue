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
  name: "PageContact",
  data: () => ({
    title: "アクセス・問い合わせ",
    items: [
      {
        name: "緑園本館",
        addressNumber: "245-8651",
        address: "横浜市泉区緑園4-5-3",
        googleMap: "https://goo.gl/maps/EN6qf9SdPTx8woMv6",
        tel: "045 (812) 6999",
        fax: "045 (812) 9772",
        eMali: "r_library@ferris.ac.jp",
        image: "~/assets/images/contact/contact-ryokuen.jpg",
        accesses: [
          {
            transportation: "相鉄いずみ野線",
            root: "「緑園都市」下車徒歩3分",
            icon: "mdi-train",
          },
          {
            transportation: "神奈中バス",
            root: "「フェリス女学院」下車徒歩1分",
            icon: "mdi-train-car-passenger-variant",
          },
        ],
      },
      {
        name: "山手分室",
        addressNumber: "231-8651",
        address: "横浜市中区山手町37",
        googleMap: "https://goo.gl/maps/8KJm93i6qN7kL6Eb8",
        tel: "045 (681) 5149",
        fax: "045 (681) 5188",
        eMali: "y_library@ferris.ac.jp",
        image: "~/assets/images/contact/contact-yamate.jpg",
        accesses: [
          {
            transportation: "JR京浜東北（根岸）線",
            root: "「石川町」下車徒歩10分",
            icon: "mdi-train",
          },
        ],
      },
    ],
  }),
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
