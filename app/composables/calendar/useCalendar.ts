import { computed, ref } from 'vue'
import type { Location } from '@/types/location'
import type { CalendarEvent, ExternalCalendarEvent, OpeningHours } from '@/types/calendar'
import { useLanguage } from '@/composables/common/'
import jsonRyokuen from '@/assets/json/calendar-ryokuen.json'
import jsonYamate from '@/assets/json/calendar-yamate.json'
import jsonCommon from '@/assets/json/calendar-common.json'
import { normalizeCalendarEvents } from '@/utils/calendar'

/** Vuetify の VCalendar に渡す表示用イベント */
export type CalendarDisplayEvent = {
  name: string
  start: string
  end?: string
  color: string
  timed: boolean
  [key: string]: any
}

const eventColors = {
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
} as const satisfies Record<'default' | 'closed' | OpeningHours, string>

const getEventColor = (event: CalendarEvent): string => {
  if (event.type === 'closure') {
    return eventColors.closed
  }

  if (event.type === 'opening-hours') {
    return eventColors[event.hours] ?? eventColors.default
  }

  return eventColors.default
}

const toCalendarDisplayEvent = (event: CalendarEvent): CalendarDisplayEvent => ({
  name: event.title,
  start: event.start,
  end: event.end,
  color: getEventColor(event),
  timed: true,
})

const normalizeLibraryEvents = (events: ExternalCalendarEvent[], location: Location): CalendarEvent[] => {
  return normalizeCalendarEvents(
    events.map(event => ({
      ...event,
      location,
    })),
  )
}

/** カレンダー画面で使う図書館選択と言語別イベント一覧を提供する */
export const useCalendar = () => {
  const { langState } = useLanguage()
  const location = ref<Location>('ryokuen')

  const eventsMap = computed<Record<Location, CalendarDisplayEvent[]>>(() => {
    const ryokuenEvents = normalizeLibraryEvents(
      [...jsonRyokuen, ...jsonCommon] as ExternalCalendarEvent[],
      'ryokuen',
    )
    const yamateEvents = normalizeLibraryEvents(
      [...jsonYamate, ...jsonCommon] as ExternalCalendarEvent[],
      'yamate',
    )

    return {
      ryokuen: ryokuenEvents.map(toCalendarDisplayEvent),
      yamate: yamateEvents.map(toCalendarDisplayEvent),
    }
  })

  return {
    langState,
    location,
    eventsMap,
  }
}
