type Genre = {
  name: string
  sign: string
}

type Category = {
  name: string
  genres: Genre[]
}

export type Shelf = {
  name: string
  categories: Category[]
}

export type Shelves = Shelf[]
