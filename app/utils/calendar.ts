import {
  openingHours,
} from '@/types/calendar'
import type {
  CalendarEvent,
  CalendarEventClosure,
  CalendarEventCustom,
  CalendarEventOpeningHours,
  EventType,
  ExternalCalendarEvent,
  OpeningHours,
} from '@/types/calendar'
import type { Location } from '@/types/location'

/**
 * 文字列が図書館の識別子かを判定する。
 * @param value - 判定する文字列
 * @returns 緑園本館または山手分室の識別子ならtrue
 */
export const isLocation = (value: string | undefined): value is Location => {
  return value === 'ryokuen' || value === 'yamate'
}

/**
 * 開館時間の表記を内部で扱う形式に正規化する。
 * @param value - 正規化するイベントタイトル
 * @returns 区切り文字、空白、時刻の桁数を揃えたタイトル
 */
export const normalizeOpeningHoursTitle = (value: string): string => {
  const withoutSeparator = value
    .replace(/[～〜]/g, '-')
    .replace(/\s+/g, '')

  return withoutSeparator.replace(/\b(\d{1,2}):(\d{1,2})\b/g, (_, hour: string, minute: string) => {
    const normalizedHour = String(Number(hour)).padStart(2, '0')
    const normalizedMinute = String(Number(minute)).padStart(2, '0')
    return `${normalizedHour}:${normalizedMinute}`
  })
}

/**
 * タイトルが定義済みの開館時間に一致するかを判定する。
 * @param value - 判定するイベントタイトル
 * @returns 開館時間のいずれかに一致する場合はtrue
 */
export const isOpeningHours = (value: string): value is OpeningHours => {
  const normalizedValue = normalizeOpeningHoursTitle(value)
  return openingHours.includes(normalizedValue as OpeningHours)
}

const getOpeningHours = (value: string): OpeningHours | undefined => {
  const normalizedValue = normalizeOpeningHoursTitle(value)
  return openingHours.find(hours => hours === normalizedValue)
}

/**
 * 図書館の識別子を確定し、値が不正な場合は例外を投げる。
 * @param value - イベントに設定された図書館識別子
 * @param fallback - valueが不正または未指定の場合に使う識別子
 * @returns 有効な図書館識別子
 * @throws valueとfallbackのどちらも有効な識別子でない場合
 */
export const normalizeCalendarLocation = (value: string | undefined, fallback?: string): Location => {
  if (isLocation(value)) {
    return value
  }

  if (fallback && isLocation(fallback)) {
    return fallback
  }

  throw new Error(`Invalid calendar location: ${String(value)}`)
}

/**
 * 閉館・閉室のタイトルが図書館の種類に対応しているかを判定する。
 * @param location - 対象の図書館
 * @param title - 閉館・閉室を示すタイトル
 * @returns 図書館に対応するタイトル、または英語表記の場合はtrue
 */
const isValidClosureTitle = (location: Location, title: string): boolean => {
  if (location === 'ryokuen') {
    return title === '閉館' || title === 'Closed'
  }

  if (location === 'yamate') {
    return title === '閉室' || title === 'Closed'
  }

  return false
}

/**
 * イベントタイトルと図書館からイベント種別を判定する。
 * @param title - 判定するイベントタイトル
 * @param location - イベント対象の図書館
 * @returns 開館時間、閉館、その他のいずれかの種別
 * @throws 図書館に対応しない閉館・閉室タイトルの場合
 */
export const classifyCalendarEvent = (title: string, location: Location): EventType => {
  const normalizedTitle = normalizeOpeningHoursTitle(title)

  if (isOpeningHours(normalizedTitle)) {
    return 'opening-hours'
  }

  if (normalizedTitle === '閉館'
    || normalizedTitle === '閉室'
    || normalizedTitle === 'Closed') {
    if (isValidClosureTitle(location, normalizedTitle)) {
      return 'closure'
    }

    throw new Error(`Invalid closure label for ${location}: ${normalizedTitle}`)
  }

  return 'custom'
}

/**
 * 外部形式のイベントを検証し、内部処理用のイベントに変換する。
 * @param event - 変換する外部イベント
 * @returns イベント種別に応じた内部イベント
 * @throws 必須項目がない場合、図書館識別子が不正な場合、または閉館表記が不適切な場合
 */
export const normalizeCalendarEvent = (event: ExternalCalendarEvent): CalendarEvent => {
  if (!event.title || !event.start) {
    throw new Error(`Invalid calendar event: ${JSON.stringify(event)}`)
  }

  const location = normalizeCalendarLocation(event.location)
  const eventType = classifyCalendarEvent(event.title, location)

  if (eventType === 'opening-hours') {
    const hours = getOpeningHours(event.title)
    if (!hours) {
      throw new Error(`Invalid opening hours: ${event.title}`)
    }

    const normalized: CalendarEventOpeningHours = {
      type: 'opening-hours',
      title: event.title,
      hours,
      start: event.start,
      end: event.end,
      allDay: event.allDay,
      location,
    }

    return normalized
  }

  if (eventType === 'closure') {
    const normalized: CalendarEventClosure = {
      type: 'closure',
      title: event.title,
      start: event.start,
      end: event.end,
      allDay: event.allDay,
      location,
    }

    return normalized
  }

  const normalized: CalendarEventCustom = {
    type: 'custom',
    title: event.title,
    start: event.start,
    end: event.end,
    allDay: event.allDay,
    location,
  }

  return normalized
}

/**
 * 外部形式のイベント一覧を内部処理用のイベント一覧に変換する。
 * @param events - 変換する外部イベント一覧
 * @returns 正規化されたイベント一覧
 * @throws 一覧内のイベントに不正なデータが含まれる場合
 */
export const normalizeCalendarEvents = (events: ExternalCalendarEvent[]): CalendarEvent[] => {
  return events.map(normalizeCalendarEvent)
}
