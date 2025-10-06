<script setup lang="ts">
import { VCalendar } from 'vuetify/labs/VCalendar'

import { ref } from 'vue'
import jsonRyokuen from '@/assets/json/calendar-ryokuen.json'
import jsonYamate from '@/assets/json/calendar-yamate.json'
import jsonCommon from '@/assets/json/calendar-common.json'

import { iconMap } from '@/utils'
import { useLanguage } from '@/composables/common/'

/*
モジュールの読み込み
------------ */

// 言語の状態
const { langState } = useLanguage()

/*
定数
------------ */

// 図書館の種類ごとの名称
const locationLabel = {
  ryokuen: {
    en: 'Ryokuen',
    ja: '緑園本館',
  },
  yamate: {
    en: 'Yamate',
    ja: '山手分室',
  },
} as const

// 時間帯指定の正規表現
const regexTimeSpecification = /^\d{2}:\d{2}\s*.+\s*\d{2}:\d{2}$/

// イベントと色の対応表
const eventColorsMap = {
  'default': '#5C6BC0',
  'closed': '#BDBDBD',
  '8:50-21:00': '#42A5F5',
  '9:00-19:00': '#FFA726',
  '9:00-17:00': '#66BB6A',
  '9:00-18:00': '#FFCA28',
  '8:50-18:30': '#AB47BC',
  '10:00-15:00': '#FF7043',
  '8:50-18:00': '#D81B60',
  '10:00-17:00': '#C0CA33',
} as const
/*
型定義
------------ */

// イベントの形式
type Event = {
  name: string
  start: string
  end?: string
  color?: string
  timed?: boolean
}

// 図書館の種類
type Location = 'ryokuen' | 'yamate'

// カレンダーコンポーネントのタイプ
type CalendarType = 'month' | 'category' | 'day' | '4day' | 'custom-daily' | 'custom-weekly' | 'week' | undefined

type EventType = keyof typeof eventColorsMap

/*
状態管理
------------ */

// カレンダーコンポーネント
const calendar = ref()

// 図書館の種類
const location = ref<Location>('ryokuen')

// フォーカスされてる日付
const focus = ref('')

// カレンダーの種類
const type = ref<CalendarType>('month')

/*
メソッド
------------ */

// 図書館の種類をセットする
const setLocation = (value: Location): void => {
  location.value = value
}

// フォーカスを今日にもどす
const setToday = (): void => {
  focus.value = ''
}

// 先月・前日へ
const prev = (): void => {
  calendar.value.prev()
}

// 翌月・翌日へ
const next = (): void => {
  calendar.value.next()
}

/*
ユーティリティー
------------ */

// 時間帯の指定方法をフォーマットする
const formatTimeRange = (input: string): string | undefined => {
  // 時刻(hh:mm)をすべて抽出
  const matches = input.match(/\d{1,2}:\d{2}/g)

  if (!matches || matches.length < 2) {
    return undefined // 時刻が2つ未満ならフォーマット不可
  }

  // 先頭と次の時刻を取得
  let [start, end] = matches

  // 桁揃え（1桁の時間は2桁に直す）
  start = start.replace(/^(\d{1}):/, '0$1:')
  end = end.replace(/^(\d{1}):/, '0$1:')

  // コロン後の分も2桁に（例: 09:5 → 09:05）
  start = start.replace(/:(\d{1})$/, ':0$1')
  end = end.replace(/:(\d{1})$/, ':0$1')

  return `${start}-${end}`
}

// イベントカラーを取得する
const getEventColor = (name: string): string => {
  if (name === 'Closed' || name === '閉館' || name === '閉室') {
    return eventColorsMap['closed']
  }
  else if (regexTimeSpecification.test(name)) {
    return eventColorsMap[formatTimeRange(name) as EventType]
  }
  else {
    return eventColorsMap['default']
  }
}

// イベントをフォーマットする
const eventFormat = (events: Event[]): Event[] => {
  const arr = []
  for (const event of events) {
    arr.push({
      name: renameClosed(event.name),
      color: event.color ?? getEventColor(event.name),
      start: event.start,
      end: event.end ? `${event.end} 24:00:00` : undefined,
      timed: true,
    })
  }
  return arr
}

// 英語ページの場合は閉館・閉室を変換する関数
const renameClosed = (eventName: string): string => {
  if (langState.value === 'ja') return eventName

  if (eventName === '閉館' || eventName === '閉室') {
    return 'Closed'
  }
  else {
    return eventName
  }
}

/*
演算
------------ */

// イベントリスト
const eventsMap = computed(() => {
  const eventsRyokuen = eventFormat(jsonRyokuen.concat(jsonCommon))
  const eventsYamate = eventFormat(jsonYamate.concat(jsonCommon))

  return {
    ryokuen: eventsRyokuen,
    yamate: eventsYamate,
  }
})
</script>

<template>
  <div>
    <VToolbar>
      <VMenu>
        <template #activator="{ props }">
          <VBtn
            v-bind="props"
            color="primary"
            variant="outlined"
            :prepend-icon="iconMap['menuDown']"
          >
            {{ locationLabel[location][langState] }}
          </VBtn>
        </template>
        <VList>
          <VListItem
            :title="locationLabel.ryokuen[langState]"
            @click="setLocation('ryokuen')"
          />
          <VListItem
            :title="locationLabel.yamate[langState]"
            @click="setLocation('yamate')"
          />
        </VList>
      </VMenu>
      <VToolbarTitle v-if="calendar">
        {{ calendar.title }}
      </VToolbarTitle>

      <VBtn
        :icon="iconMap['chevronLeft']"
        @click="prev"
      />
      <VBtn
        :icon="iconMap['chevronRight']"
        @click="next"
      />
      <VBtn
        :icon="iconMap['calendarToday']"
        @click="setToday"
      />
    </VToolbar>
    <VSheet
      class="mt-4"
      height="600"
    >
      <VCalendar
        ref="calendar"
        v-model="focus"
        :type
        :events="eventsMap[location]"
      />
    </VSheet>
  </div>
</template>
