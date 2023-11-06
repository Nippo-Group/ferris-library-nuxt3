<script setup lang="ts">
import imgRyokuen from "~/assets/images/contact/contact-ryokuen.jpg";

const name = "緑園本館";
const addressNumber = "245-8651";
const address = "横浜市泉区緑園4-5-3";
const googleMap = "https://goo.gl/maps/EN6qf9SdPTx8woMv6";
const tel = "045 (812) 6999";
const fax = "045 (812) 9772";
const eMali = "r_library@ferris.ac.jp";
const image = imgRyokuen;
const accesses = [
  {
    transportation: "相鉄いずみ野線",
    root: "「緑園都市」下車徒歩3分",
    icon: "train",
  },
  {
    transportation: "神奈中バス",
    root: "「フェリス女学院」下車徒歩1分",
    icon: "car",
  },
];
</script>

<template>
  <templates-card-contact
    :name="name"
    :accesses="accesses"
    :address="address"
    :address-number="addressNumber"
    :e-mali="eMali"
    :fax="fax"
    :google-map="googleMap"
    :image="image"
    :tel="tel"
  ></templates-card-contact>
</template>
