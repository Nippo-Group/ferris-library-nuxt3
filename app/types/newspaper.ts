export type Newspaper = {
  title: string
  subTitle: string
  country: string
  publisher: string
  cycle: string
  retentionPeriod: string
  location: string
  note: string
}

export type NewspaperCat = {
  category: string
  newspapers: Newspaper[]
}
