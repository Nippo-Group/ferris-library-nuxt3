<script setup lang="ts">
import { useLangSwitch } from '@/composables/language/useLangSwitch'
import imgRyokuen from '@/assets/images/contact/contact-ryokuen.jpg'

const itemsEng = {
  name: 'Ryokuen Library',
  addressNumber: '245-8651',
  address: '4-5-3 Ryokuen, Izumi-ku, Yokohama, 245-8651 Japan',
  googleMap: 'https://goo.gl/maps/EN6qf9SdPTx8woMv6',
  tel: '045 (812) 6999',
  fax: '045 (812) 9772',
  eMali: 'r_library@ferris.ac.jp',
  image: imgRyokuen,
  accesses: [
    {
      transportation: 'Sotetsu Izumino Line',
      root: '「Ryokuen-toshi Station」3 minutes walk',
      icon: 'train',
    },
    {
      transportation: 'Kanachu Bus',
      root: '「Ferris」1 minutes walk',
      icon: 'car',
    },
  ],
}
const items = {
  name: '緑園本館',
  addressNumber: '245-8651',
  address: '横浜市泉区緑園4-5-3',
  googleMap: 'https://goo.gl/maps/EN6qf9SdPTx8woMv6',
  tel: '045 (812) 6999',
  fax: '045 (812) 9772',
  eMali: 'r_library@ferris.ac.jp',
  image: imgRyokuen,
  accesses: [
    {
      transportation: '相鉄いずみ野線',
      root: '「緑園都市」下車徒歩3分',
      icon: 'train',
    },
    {
      transportation: '神奈中バス',
      root: '「フェリス女学院」下車徒歩1分',
      icon: 'car',
    },
  ],
}
const { contents } = useLangSwitch(items, itemsEng)
</script>

<template>
  <templates-card-contact
    :name="contents.name"
    :accesses="contents.accesses"
    :address="contents.address"
    :address-number="contents.addressNumber"
    :e-mali="contents.eMali"
    :fax="contents.fax"
    :google-map="contents.googleMap"
    :image="contents.image"
    :tel="contents.tel"
  />
</template>
