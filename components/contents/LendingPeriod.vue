<script setup lang="ts">
import { useLangSwitch } from '@/composables/language/useLangSwitch'
import type { AlertType } from '@/types/alert'

const title = '貸出期間'
const headers = ['対象', '図書', '学科推奨図書', '雑誌／楽譜', 'CD/レコード']
const items = [
  ['1～3年生／科目等履修生／ディプロマ生', '2週間', '2週間', '1週間', '翌々日'],
  ['4年生', '30日', '2週間', '1週間', '翌々日'],
  ['大学院生', '30日', '2週間', '1週間', '1週間'],
  ['職員／定年退職教職員', '30日', '不可', '1週間', '1週間'],
  ['卒業生／中高生', '2週間', '不可', '1週間', '翌々日'],
  [
    '専任教員／名誉教授',
    '当年度2月末まで',
    '不可',
    '当年度2月末まで',
    '当年度2月末まで',
  ],
  [
    '非常勤教員',
    '当年度1月末まで',
    '不可',
    '当年度1月末まで',
    '当年度1月末まで',
  ],
]
type Alert = {
  type: AlertType
  text: string
}
const alerts: Alert[] = [
  {
    type: 'success',
    text: '春・夏・冬季休暇中には学部生・大学院生を対象に長期貸出を行います。詳細はこのHPや掲示などでお知らせします。',
  },
]

const titleEng = 'Loan periods and checkouts limits'
const headersEng = [
  'User Status',
  'Books',
  'Journals',
  'Course Reserve Books',
  'Musical Scores',
  'CDs & Records',
]
const itemsEng = [
  [
    'Undergraduate students (1st, 2nd and 3rd year)',
    '30 items / 2 weeks',
    '30 items / 1 week',
    '5 items / 1 week',
    '8 items / 1 week',
    '8 items each / 2 days',
  ],
  [
    'Undergraduate students (4th year)',
    '30 items / 30 days',
    '30 items / 1 week',
    '5 items / 1 week',
    '8 items / 1 week',
    '8 items each / 2 days',
  ],
  [
    'Graduate students',
    '30 items / 30 days',
    '30 items / 1 week',
    '5 items / 1 week',
    '8 items / 1 week',
    '8 items each / 1 week',
  ],
  [
    'Faculty',
    '60 items / Until the end of Febrary',
    '30 items / Until the end of Febrary',
    '0 items',
    '30 items / Until the end of Febrary',
    '30 items each / Until the end of Febrary',
  ],
  [
    'Staff',
    '30 items / 30 days',
    '30 items / 1 week',
    '0 items',
    '8 items / 1 week',
    '8 items each / 1 week',
  ],
]

const { contents } = useLangSwitch(
  { title, headers, items, alerts },
  { title: titleEng, headers: headersEng, items: itemsEng, alerts: undefined },
)
</script>

<template>
  <elements-header-lv2>{{ contents.title }}</elements-header-lv2>
  <elements-responsive-table
    :items-array="contents.items"
    :headers="contents.headers"
  />
  <v-alert
    v-for="(alert, index) in contents.alerts"
    :key="index"
    :type="alert.type"
    class="mt-4"
  >
    {{ alert.text }}
  </v-alert>
</template>
