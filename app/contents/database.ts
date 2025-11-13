import type { Category, Language } from '~/app/types/ebook'

export const optionsLanguage = ref<Language[]>(['日本語', '外国語'])
export const optionsCategory = ref<Category[]>([
  '電子ブック',
  '総合',
  '参考・辞書事典類',
  '新聞記事',
  '英米文学',
  '日本文学',
  '言語学',
  '社会科学',
  '音楽',
  '判例・法令・議会資料',
])

export const toolbarText = `検索やプリントアウトは無料です。
OPAC端末から利用する場合、一部ダウンロードができない場合があります。`
