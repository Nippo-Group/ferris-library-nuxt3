// 図書館の種類
export type Location = 'ryokuen' | 'yamate'

export type LocationRecord<T> = Record<Location, T>
