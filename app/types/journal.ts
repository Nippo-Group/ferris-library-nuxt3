import type { Link } from './link'

export type JournalItem = {
  id: string
  title: string
  body: string
  links: Link[]
}
