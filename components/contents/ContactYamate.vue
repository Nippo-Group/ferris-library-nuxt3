<script setup lang="ts">
import { useLanguage } from "@/composable/language/useLanguage";
import imgYamate from "~/assets/images/contact/contact-yamate.jpg";

const { langState } = useLanguage();
const items = computed(() => {
  switch (langState.value) {
    case "en":
      return {
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
      };
    default:
      return {
        name: "山手分室",
        addressNumber: "231-8651",
        address: "横浜市中区山手町37",
        googleMap: "https://goo.gl/maps/8KJm93i6qN7kL6Eb8",
        tel: "045 (681) 5149",
        fax: "045 (681) 5188",
        eMali: "y_library@ferris.ac.jp",
        image: imgYamate,
        accesses: [
          {
            transportation: "JR京浜東北（根岸）線",
            root: "「石川町」下車徒歩10分",
            icon: "train",
          },
        ],
      };
  }
});
</script>

<template>
  <templates-card-contact
    :name="items.name"
    :accesses="items.accesses"
    :address="items.address"
    :address-number="items.addressNumber"
    :e-mali="items.eMali"
    :fax="items.fax"
    :google-map="items.googleMap"
    :image="items.image"
    :tel="items.tel"
  ></templates-card-contact>
</template>
