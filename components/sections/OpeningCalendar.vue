<script setup lang="ts">
import { VCalendar } from 'vuetify/labs/VCalendar'

import { ref } from 'vue'
import jsonRyokuen from '@/assets/json/calendar-ryokuen.json'
import jsonYamate from '@/assets/json/calendar-yamate.json'
import jsonCommon from '@/assets/json/calendar-common.json'

import { iconMap } from '@/utils'
import { useLanguage } from '@/composables/common/'
import type { Location, LocationRecord, LangRecord } from '@/types'

/*
モジュールの読み込み
------------ */

// 言語の状態
const { langState } = useLanguage()

/*
定数
------------ */

// 図書館の種類ごとの名称
const locationLabel: LocationRecord<LangRecord<string>> = {
  ryokuen: {
    en: 'Ryokuen',
    ja: '緑園本館',
  },
  yamate: {
    en: 'Yamate',
    ja: '山手分室',
  },
}

// 時間帯指定の正規表現
const regexTimeSpecification = /^\d{1,2}:\d{1,2}\s*.+\s*\d{1,2}:\d{1,2}$/

// イベントと色の対応表
const eventColorsMap = {
  'default': '#5C6BC0',
  'closed': '#616161',
  '08:50-21:00': '#42A5F5',
  '09:00-19:00': '#FFA726',
  '09:00-17:00': '#66BB6A',
  '09:00-18:00': '#FFCA28',
  '08:50-18:30': '#AB47BC',
  '10:00-15:00': '#FF7043',
  '08:50-18:00': '#D81B60',
  '10:00-17:00': '#C0CA33',
} as const
/*
型定義
------------ */

// イベントの形式
type CalendarEvent = {
  name: string
  start: string
  end?: string
  color?: string
  timed?: boolean
}

// カレンダーコンポーネントのタイプ
type CalendarType = 'month' | 'category' | 'day' | '4day' | 'custom-daily' | 'custom-weekly' | 'week' | undefined

type CalendarEventColorKey = keyof typeof eventColorsMap

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

// 選択中のイベント
const selectedEvent = ref<CalendarEvent | undefined>()
// 選択中イベントのエレメント
const selectedElement = ref()
// 選択中イベントの詳細の開閉状態
const selectedOpen = ref<boolean>(false)

/*
メソッド
------------ */

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

// イベントの詳細表示
const showEvent = (nativeEvent: Event, { event }: { event: CalendarEvent }): void => {
  const open = () => {
    selectedEvent.value = event
    selectedElement.value = nativeEvent.target
    requestAnimationFrame(() => requestAnimationFrame(() => selectedOpen.value = true))
  }
  if (selectedOpen.value) {
    selectedOpen.value = false
    requestAnimationFrame(() => requestAnimationFrame(() => open()))
  }
  else {
    open()
  }
  nativeEvent.stopPropagation()
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
    const key = formatTimeRange(name)
    if (key && key in eventColorsMap) {
      return eventColorsMap[key as CalendarEventColorKey]
    }
    else {
      return eventColorsMap['default']
    }
  }
  else {
    return eventColorsMap['default']
  }
}

// イベントをフォーマットする
const eventFormat = (events: CalendarEvent[]): CalendarEvent[] => {
  const arr = []
  for (const event of events) {
    arr.push({
      name: renameClosed(event.name),
      color: event.color ?? getEventColor(event.name),
      start: event.start,
      end: event.end,
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

// 日本語の場合の年月のフォーマット
const formatYearAndMonth = (title: string): string => {
  if (langState.value !== 'ja') return title

  const regex = /^\d{1,2}月 \d{4}/
  if (!regex.test(title)) return title

  const arr = title.split(' ').reverse()
  arr[0] = `${arr[0]}年`
  return arr.join(' ')
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
  <ContainersStack
    direction="col"
  >
    <VTabs
      v-model="location"
      align-tabs="start"
    >
      <VTab value="ryokuen">
        {{ locationLabel.ryokuen[langState] }}
      </VTab>
      <VTab value="yamate">
        {{ locationLabel.yamate[langState] }}
      </VTab>
    </VTabs>

    <VToolbar density="compact">
      <VToolbarTitle v-if="calendar">
        {{ formatYearAndMonth(calendar.title) }}
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
      height="700"
    >
      <VCalendar
        ref="calendar"
        v-model="focus"
        :type
        :locale="langState"
        color="primary"
        :events="eventsMap[location]"
        @click:event="showEvent as (nativeEvent: Event, { event }: { event: CalendarEvent }) => void"
      />

      <VMenu
        v-model="selectedOpen"
        :activator="selectedElement"
        :close-on-content-click="false"
        location="bottom"
      >
        <VCard
          :color="selectedEvent?.color"
          density="compact"
          variant="tonal"
        >
          <VCardText>
            <p>{{ selectedEvent?.name }}</p>
          </VCardText>
        </VCard>
      </VMenu>
    </VSheet>
  </ContainersStack>
</template>
