<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import dayListPlugin from '@fullcalendar/list'

import ryokuen from '@/assets/json/calendar-ryokuen.json'
import yamate from '@/assets/json/calendar-yamate.json'
import common from '@/assets/json/calendar-common.json'

import { useLanguage } from '@/composables/language/useLanguage'

type BeforeFormatEvent = {
  name: string
  start: string
  end?: string
}
type Event = {
  title: string
  color: string
  start: string
  end?: string
  allday?: boolean
}

// 言語の状態
const { langState } = useLanguage()

// 緑園本館・山手分室の状態
type Location = 'ryokuen' | 'yamate'
const selectLocation = ref<Location>('ryokuen')
const locationLabel = computed(() => {
  if (langState.value === 'en') {
    return {
      ryokuen: 'Ryokuen',
      yamate: 'Yamate',
    }
  }
  else {
    return {
      ryokuen: '緑園本館',
      yamate: '山手分室',
    }
  }
})

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

// イベントをフォーマットする
const eventFormat = (events: BeforeFormatEvent[]): Event[] => {
  const arr = []
  for (const event of events) {
    const color = eventColors[eventNames.indexOf(event.name)]

    arr.push({
      title: renameClosed(event.name),
      color,
      start: event.start,
      end: event.end ? `${event.end} 24:00:00` : undefined,
      allDay: true,
    })
  }
  return arr
}
const eventColors = [
  '#5C6BC0',
  '#BDBDBD',
  '#BDBDBD',
  '#BDBDBD',
  '#42A5F5',
  '#FFA726',
  '#66BB6A',
  '#FFCA28',
  '#AB47BC',
  '#FF7043',
  '#D81B60',
  '#C0CA33',
]
const eventNames = [
  'イベント',
  '閉館',
  '閉室',
  'Closed',
  '8:50～21:00',
  '9:00～19:00',
  '9:00～17:00',
  '9:00～18:00',
  '8:50～18:30',
  '10:00～15:00',
  '8:50～18:00',
  '10:00～17:00',
]

// イベントを取得する
const eventsRyokuen = eventFormat(ryokuen.concat(common))
const eventsYamate = eventFormat(yamate.concat(common))
const events = computed(() => {
  if (selectLocation.value === 'ryokuen') {
    return eventsRyokuen
  }
  else {
    return eventsYamate
  }
})

// Fullcalendarコンポーネントよりメソッドの取得
const fullCalendarRef = ref()
const fullcalendarApi = computed(() => {
  if (fullCalendarRef.value) {
    return fullCalendarRef.value.getApi()
  }
  else {
    return undefined
  }
})

// FullCalendarのオプション設定
const calendarOptions = reactive({
  plugins: [dayGridPlugin, dayListPlugin],
  initialView: 'dayGridMonth',
  nowIndicator: true,
  editable: false,
  events,
  locale: langState.value,
  timeZone: 'Asia/Tokyo',
  height: 'auto',
  headerToolbar: {
    start: 'title',
    end: 'dayGridMonth listMonth',
  },
  displayEventTime: false,
})

const flag = ref<boolean>(false)
const show = () => {
  flag.value = true
}

onMounted(() => {
  window.setTimeout(show, 500)
})
</script>

<template>
  <v-toolbar density="compact">
    <v-menu>
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          color="primary"
          variant="elevated"
        >
          {{ locationLabel[selectLocation] }}
          <icons-menu-down end />
        </v-btn>
      </template>
      <v-list>
        <v-list-item link>
          <v-list-item-title @click="selectLocation = 'ryokuen'">
            {{ locationLabel.ryokuen }}
          </v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title @click="selectLocation = 'yamate'">
            {{ locationLabel.yamate }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <VTooltip
      text="Previous"
      location="top"
    >
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          icon
          @click="fullcalendarApi.prev()"
        >
          <icons-chevron-left />
        </v-btn>
      </template>
    </VTooltip>
    <VTooltip
      text="Next"
      location="top"
    >
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          icon
          @click="fullcalendarApi.next()"
        >
          <icons-chevron-right />
        </v-btn>
      </template>
    </VTooltip>
    <VSpacer />
    <VTooltip
      text="Today"
      location="top"
    >
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          icon
          @click="fullcalendarApi.today()"
        >
          <icons-calendar-today />
        </v-btn>
      </template>
    </VTooltip>
  </v-toolbar>
  <VSheet class="mt-4">
    <FullCalendar
      v-if="flag"
      ref="fullCalendarRef"
      :options="calendarOptions"
    >
      <template #eventContent="arg">
        <b class="pa-1">
          {{ arg.event.title }}
          <VTooltip
            activator="parent"
            location="top"
          >
            {{ arg.event.title }}
          </VTooltip>
        </b>
      </template>
    </FullCalendar>
  </VSheet>
</template>
