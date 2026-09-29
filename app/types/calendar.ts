import type { Location } from './location'

// 一般的なカレンダーのイベント形式（読み込み時）
export type ExternalCalendarEvent = {
  id?: string
  title: string
  start: string
  end?: string
  allDay?: boolean
  location?: string
}

// カレンダーのイベント形式（内部処理用）
export type EventType = 'opening-hours' | 'closure' | 'custom'

// カレンダーの開館時間の一覧
export const openingHours = [
  '08:50-21:00',
  '09:00-19:00',
  '09:00-17:00',
  '09:00-18:00',
  '08:50-18:30',
  '10:00-15:00',
  '08:50-18:00',
  '10:00-17:00',
] as const

// カレンダーの開館時間の一覧の型
export type OpeningHours = typeof openingHours[number]

// カレンダーイベント（開館時間）
export type CalendarEventOpeningHours = {
  type: 'opening-hours'
  title: string
  hours: OpeningHours
  start: string
  end?: string
  allDay?: boolean
  location: Location
}

// カレンダーイベント（閉館）
export type CalendarEventClosure = {
  type: 'closure'
  title: string
  start: string
  end?: string
  allDay?: boolean
  location: Location
}

// カレンダーイベント（カスタム）
export type CalendarEventCustom = {
  type: 'custom'
  title: string
  start: string
  end?: string
  allDay?: boolean
  location: Location
}

// カレンダーイベント
export type CalendarEvent
  = | CalendarEventOpeningHours
    | CalendarEventClosure
    | CalendarEventCustom
