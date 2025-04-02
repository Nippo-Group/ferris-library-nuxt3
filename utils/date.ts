import dayjs from 'dayjs'

/**
 * 日にちをもとに年度を判定する
 * @param date - 判定する日付（YYYY-MM-DD形式）
 * @returns 年度を西暦で返す
 */
export const getFiscalYear = (date: string): string => {
  const day = dayjs(date)
  const month = Number(day.format('M'))

  if (month < 4) {
    return day.subtract(1, 'y').format('YYYY')
  }

  return day.format('YYYY')
}

/**
 * 未来の日付かどうかを判定する
 * @param date - 判定する日付（YYYY-MM-DD形式）
 * @returns 指定された日付が現在より未来の場合はtrue、それ以外はfalse
 */
export const isFuture = (date: string): boolean => {
  if (!date) return false

  const today = dayjs().startOf('day')
  const targetDate = dayjs(date).startOf('day')

  return targetDate.isAfter(today)
}
