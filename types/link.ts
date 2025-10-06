export type File = 'pdf' | 'excel' | 'word' | 'doc'

export type LinkType = 'internal' | 'external'

export type Link = {
  name: string
  path: string
  type: File & LinkType
}
