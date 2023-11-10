<script setup lang="ts">
import imgRyokuen from "~/assets/images/contact/contact-ryokuen.jpg";
import imgYamate from "~/assets/images/contact/contact-yamate.jpg";

const title = ref("Contact / Access");
useSeoMeta({ title: title.value });
definePageMeta({ layout: "english" });

const items = reactive([
  {
    name: "Ryokuen Library",
    addressNumber: "245-8651",
    address: "4-5-3 Ryokuen, Izumi-ku, Yokohama, 245-8651 Japan",
    googleMap: "https://goo.gl/maps/EN6qf9SdPTx8woMv6",
    tel: "045 (812) 6999",
    fax: "045 (812) 9772",
    eMali: "r_library@ferris.ac.jp",
    image: imgRyokuen,
    accesses: [
      {
        transportation: "Sotetsu Izumino Line",
        root: "「Ryokuen-toshi Station」3 minutes walk",
        icon: "train",
      },
      {
        transportation: "Kanachu Bus",
        root: "「Ferris」1 minutes walk",
        icon: "car",
      },
    ],
  },
  {
    name: "Yamate Library",
    addressNumber: "231-8651",
    address: "37 Yamate-cho, Naka-ku, Yokohama, 231-8651 Japan",
    googleMap: "https://goo.gl/maps/8KJm93i6qN7kL6Eb8",
    tel: "045 (681) 5149",
    fax: "045 (681) 5188",
    eMali: "y_library@ferris.ac.jp",
    image: imgYamate,
    accesses: [
      {
        transportation: "JR-EAST Keihin Tohoku Line",
        root: "「Ishikawacho Station」10 minutes walk",
        icon: "train",
      },
    ],
  },
]);
</script>

<template>
  <v-container>
    <elements-header-lv1>{{ title }}</elements-header-lv1>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="12" sm="8" md="6" lg="4">
        <card-contact
          :name="item.name"
          :accesses="item.accesses"
          :address="item.address"
          :address-number="item.addressNumber"
          :e-mali="item.eMali"
          :fax="item.fax"
          :google-map="item.googleMap"
          :image="item.image"
          :tel="item.tel"
        ></card-contact>
      </v-col>
    </v-row>
  </v-container>
</template>
