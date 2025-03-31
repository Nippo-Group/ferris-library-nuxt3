import type { CardContactProps } from '@/components/templates/CardContact.vue'

import { useLangSwitch } from '@/composables/language/useLangSwitch'
import imgRyokuen from '@/assets/images/contact/contact-ryokuen.jpg'
import imgYamate from '~/assets/images/contact/contact-yamate.jpg'

const ryokuenItemsEng: CardContactProps = {
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
const ryokuenItems: CardContactProps = {
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

export const { contents: ryokuen } = useLangSwitch<CardContactProps>(ryokuenItems, ryokuenItemsEng)

const yamateItemsEng: CardContactProps = {
  name: 'Yamate Library',
  addressNumber: '231-8651',
  address: '37 Yamate-cho, Naka-ku, Yokohama, 231-8651 Japan',
  googleMap: 'https://goo.gl/maps/8KJm93i6qN7kL6Eb8',
  tel: '045 (681) 5149',
  fax: '045 (681) 5188',
  eMali: 'y_library@ferris.ac.jp',
  image: imgYamate,
  accesses: [
    {
      transportation: 'JR-EAST Keihin Tohoku Line',
      root: '「Ishikawacho Station」10 minutes walk',
      icon: 'train',
    },
  ],
}
const yamateItems: CardContactProps = {
  name: '山手分室',
  addressNumber: '231-8651',
  address: '横浜市中区山手町37',
  googleMap: 'https://goo.gl/maps/8KJm93i6qN7kL6Eb8',
  tel: '045 (681) 5149',
  fax: '045 (681) 5188',
  eMali: 'y_library@ferris.ac.jp',
  image: imgYamate,
  accesses: [
    {
      transportation: 'JR京浜東北（根岸）線',
      root: '「石川町」下車徒歩10分',
      icon: 'train',
    },
  ],
}

export const { contents: yamate } = useLangSwitch<CardContactProps>(yamateItems, yamateItemsEng)
