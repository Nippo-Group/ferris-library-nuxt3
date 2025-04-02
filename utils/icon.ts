import { mdiChevronUp, mdiChevronDown } from '@mdi/js'

/**
 * 開閉アイコン
 * @param {boolean} flag Falseで開く（Down）、Trueで閉まる（Up）
 * @returns Icon
 */
export const openShutIcon = (flag: boolean) => {
  return flag ? mdiChevronUp : mdiChevronDown
}
