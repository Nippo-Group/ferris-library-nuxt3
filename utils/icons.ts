import {
  mdiAlertCircleOutline,
  mdiArrowRightCircleOutline,
  mdiBookOpenVariant,
  mdiBookSearch,
  mdiCalendarMultiselect,
  mdiCalendarToday,
  mdiCheckboxMarkedCircleOutline,
  mdiChevronDown,
  mdiChevronLeft,
  mdiChevronRight,
  mdiChevronUp,
  mdiCircleSmall,
  mdiClose,
  mdiConnection,
  mdiContentCopy,
  mdiDownload,
  mdiEmail,
  mdiFileDocumentMultipleOutline,
  mdiFileExcelOutline,
  mdiFilePdfBox,
  mdiFileWordOutline,
  mdiFormatVerticalAlignTop,
  mdiGestureTap,
  mdiHome,
  mdiInformation,
  mdiLibrary,
  mdiLibraryShelves,
  mdiMagnify,
  mdiMapMarker,
  mdiMenuDown,
  mdiMenuRight,
  mdiNewspaperVariantOutline,
  mdiOpenInNew,
  mdiSend,
  mdiSort,
  mdiTextBoxSearchOutline,
  mdiTranslate,
} from '@mdi/js'

const iconMap = {
  alert: mdiAlertCircleOutline,
  arrowRight: mdiArrowRightCircleOutline,
  bookOpen: mdiBookOpenVariant,
  bookSearch: mdiBookSearch,
  calendarMultiselect: mdiCalendarMultiselect,
  calendarToday: mdiCalendarToday,
  checkboxMarked: mdiCheckboxMarkedCircleOutline,
  chevronDown: mdiChevronDown,
  chevronLeft: mdiChevronLeft,
  chevronRight: mdiChevronRight,
  chevronUp: mdiChevronUp,
  circle: mdiCircleSmall,
  close: mdiClose,
  connection: mdiConnection,
  copy: mdiContentCopy,
  download: mdiDownload,
  doc: mdiFileDocumentMultipleOutline,
  email: mdiEmail,
  excel: mdiFileExcelOutline,
  pdf: mdiFilePdfBox,
  word: mdiFileWordOutline,
  verticalAlign: mdiFormatVerticalAlignTop,
  tap: mdiGestureTap,
  home: mdiHome,
  info: mdiInformation,
  library: mdiLibrary,
  shelves: mdiLibraryShelves,
  magnify: mdiMagnify,
  map: mdiMapMarker,
  menuDown: mdiMenuDown,
  menuRight: mdiMenuRight,
  newspaper: mdiNewspaperVariantOutline,
  openInNew: mdiOpenInNew,
  send: mdiSend,
  sort: mdiSort,
  search: mdiTextBoxSearchOutline,
  translate: mdiTranslate,
} as const

export type IconKey = keyof typeof iconMap

export const getIcon = (key: IconKey) => iconMap[key]

/**
 * 開閉アイコン
 * @param {boolean} flag Falseで開く（Down）、Trueで閉まる（Up）
 * @returns Icon
 */
export const openShutIcon = (flag: boolean) => {
  return getIcon(flag ? 'chevronUp' : 'chevronDown')
}
