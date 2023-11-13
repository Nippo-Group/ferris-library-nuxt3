<script setup lang="ts">
import { useLanguage } from "@/composable/language/useLanguage";
import imgRyokuen from "@/assets/images/contact/contact-ryokuen.jpg";

const { langState } = useLanguage();
const items = computed(() => {
  switch (langState.value) {
    case "en":
      return {
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
      };
    default:
      return {
        name: "緑園本館",
        addressNumber: "245-8651",
        address: "横浜市泉区緑園4-5-3",
        googleMap: "https://goo.gl/maps/EN6qf9SdPTx8woMv6",
        tel: "045 (812) 6999",
        fax: "045 (812) 9772",
        eMali: "r_library@ferris.ac.jp",
        image: imgRyokuen,
        accesses: [
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
