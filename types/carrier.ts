import type { Img } from '@/components/elements/ImgGroup.vue'

export type Link = {
  name: string
  url: string
}

export type Item = {
  name: string
  type: 'データベース' | '雑誌' | '図書' | '電子ブック'
  logout: boolean
  content: string
  access: string
  links?: Link[]
  heading?: boolean
  imgs?: Img[]
}
export type ItemHeading = {
  name: string
  heading: true
  content: string
}
