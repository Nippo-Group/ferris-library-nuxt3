import type { Dayjs } from 'dayjs'

const dayjs = useDayjs()

const formatMap = {
  simple: 'YYYY-MM-DD',
  camel: 'YYYYMMDD',
  ja: 'YYYY年M月D日（dd）',
}

export type DateFormat = keyof typeof formatMap

/**
 * 日付ののフォーマット
 * @param date 日付の指定
 * @param format フォーマットの形式
 * @returns フォーマットの結果
 */
export const dateFormat = (date: Dayjs | Date | string, format?: DateFormat): string => {
  return dayjs(date).format(format ? formatMap[format] : undefined)
}
