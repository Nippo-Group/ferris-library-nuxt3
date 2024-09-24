export type FileType = 'PDF' | 'Word' | 'Excel' | 'Other'

export type File = {
  name: string
  url?: string
  type?: FileType
  note?: string
  target?: string
  date?: string
}
