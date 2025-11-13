export type Available = '学外' | '学内'
export type Language = '日本語' | '外国語'
export type Category
  = | '電子ブック'
    | '総合'
    | '参考・辞書事典類'
    | '新聞記事'
    | '英米文学'
    | '日本文学'
    | '言語学'
    | '社会科学'
    | '音楽'
    | '判例・法令・議会資料'

export type Link = {
  name: string
  url: string
}
export type Document = {
  name: string
  url: string
  type: string
}

export type EbookItem = {
  name: string
  languages: Language[]
  categories: Category[]
  available: Available[]
  body: string
  access?: string
  logout?: boolean
  attention?: string
  links?: Link[]
  documents?: Document[]
}
