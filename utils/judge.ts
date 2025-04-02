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
