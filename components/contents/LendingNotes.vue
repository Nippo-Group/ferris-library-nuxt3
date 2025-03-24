<script setup lang="ts">
import { useLangSwitch } from '@/composables/language/useLangSwitch'
import type { AlertType } from '@/types/alert'

const title = '注意事項'

type Alert = {
  type: AlertType
  text: string
}
const items: Alert[] = [
  {
    type: 'warning',
    text: '貸出手続きを忘れると出口のアラームが鳴ります。',
  },
  {
    type: 'warning',
    text: '資料を破損・紛失したときは速やかにお知らせください。',
  },
  {
    type: 'warning',
    text: '借りたい資料が図書館にない場合や探せない場合はカウンターにご相談ください。他の図書館の蔵書検索や、探し方のコツなどを案内します。',
  },
  {
    type: 'warning',
    text: '資料の又貸しや学生証・ライブラリーカードの貸借は、資料の紛失・返却の遅延等の原因になるため一切禁止です。',
  },
]

const titleEng = 'Please Note'
const itemsEng: Alert[] = [
  {
    type: 'warning',
    text: 'If you try to take materials out of the library without having checked them out, they will be detected by a sensor and an alarm will sound.',
  },
  {
    type: 'warning',
    text: 'In the event that you lose or damage library materials, please contact the library promptly.',
  },
  {
    type: 'warning',
    text: 'Lending other people library materials that you have borrowed is prohibited, as is allowing other people to use your student ID or library card.',
  },
  {
    type: 'success',
    text: 'If the library does not have an item you need or if you cannot find an item that you are looking for, please contact the reference counter. The reference staff will be happy to help you.',
  },
  {
    type: 'success',
    text: 'Reference books, recent journals, microfilm and microfiche materials, videotapes, LDs, DVDs, CD-ROMs and DVDs are only available for use in the library.',
  },
  {
    type: 'success',
    text: 'Extended borrowing privileges are granted to undergraduate and graduate students over the spring, summer and winter vacation periods.',
  },
  {
    type: 'success',
    text: 'Certain materials may be borrowed for same-day use. There is no limit on the number of these items that may be borrowed.',
  },
]

const { contents } = useLangSwitch(
  { title, items },
  { title: titleEng, items: itemsEng },
)
</script>

<template>
  <PartsTitleLv2>{{ contents.title }}</PartsTitleLv2>
  <VAlert
    v-for="(note, j) in contents.items"
    :key="'note' + j"
    density="compact"
    variant="outlined"
    :type="note.type"
    class="mt-4"
  >
    {{ note.text }}
  </VAlert>
</template>
