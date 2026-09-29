<script setup lang="ts">
import { ref } from 'vue'

import { iconMap } from '@/utils'
import { useCalendar } from '@/composables/calendar/useCalendar'
import type { LocationRecord, LangRecord } from '@/types'
import type { CalendarDisplayEvent } from '@/composables/calendar/useCalendar'

/*
モジュールの読み込み
------------ */

// カレンダーの状態と表示イベント
const { langState, location, eventsMap } = useCalendar()

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

/*
型定義
------------ */

// カレンダーコンポーネントのタイプ
type CalendarType = 'month' | 'category' | 'day' | '4day' | 'custom-daily' | 'custom-weekly' | 'week' | undefined

/*
状態管理
------------ */

// カレンダーコンポーネント
const calendar = ref()

// フォーカスされてる日付
const focus = ref('')

// カレンダーの種類
const type = ref<CalendarType>('month')

// 選択中のイベント
const selectedEvent = ref<CalendarDisplayEvent | undefined>()
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
const showEvent = (_nativeEvent: Event, scope: any): void => {
  const event = scope.event
  const nativeEvent = _nativeEvent
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

// 日本語の場合の年月のフォーマット
const formatYearAndMonth = (title: string): string => {
  if (langState.value !== 'ja') return title

  const regex = /^\d{1,2}月 \d{4}/
  if (!regex.test(title)) return title

  const arr = title.split(' ').reverse()
  arr[0] = `${arr[0]}年`
  return arr.join(' ')
}
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
        {{ locationLabel.ryokuen[langState as 'ja' | 'en'] }}
      </VTab>
      <VTab value="yamate">
        {{ locationLabel.yamate[langState as 'ja' | 'en'] }}
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
        @click:event="showEvent"
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
