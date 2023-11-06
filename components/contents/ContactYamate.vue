<script setup lang="ts">
import imgYamate from "~/assets/images/contact/contact-yamate.jpg";

const name = "山手分室";
const addressNumber = "231-8651";
const address = "横浜市中区山手町37";
const googleMap = "https://goo.gl/maps/8KJm93i6qN7kL6Eb8";
const tel = "045 (681) 5149";
const fax = "045 (681) 5188";
const eMali = "y_library@ferris.ac.jp";
const image = imgYamate;
const accesses = [
  {
    transportation: "JR京浜東北（根岸）線",
    root: "「石川町」下車徒歩10分",
    icon: "train",
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
