import items from '@/assets/json/database.json'
import type { Available, Category, Language } from '~/app/types/ebook'

export const useEbookList = () => {
  const keyword = useState<string | undefined>()
  const available = useState<Available>('available', () => '学内')
  const language = useState<Language | undefined>()
  const categories = useState<Category[] | undefined>()

  const itemsAll = ref(items)
  const ebooks = computed(() => {
    const list = []
    for (const item of itemsAll.value) {
      if (
        flags(
          item.name + item.body,
          item.available,
          item.languages,
          item.categories,
        )
      ) {
        list.push(item)
      }
    }
    return list
  })
  const length = computed<number>(() => ebooks.value.length)
  const lengthAll = computed<number>(() => items.length)

  const flagKeyword = (value: string): boolean => {
    return keyword.value
      ? value.toLowerCase().includes(keyword.value.toLowerCase())
      : true
  }
  const flagAvailable = (value: string[]): boolean => {
    return available.value ? value.includes(available.value) : true
  }
  const flagLanguage = (value: string[]): boolean => {
    return language.value ? value.includes(language.value) : true
  }
  const flagCategory = (value: string[]): boolean => {
    if (categories.value && categories.value.length > 0) {
      let result = false
      for (const category of categories.value) {
        if (value.includes(category)) {
          result = true
        }
      }
      return result
    }
    else {
      return true
    }
  }
  const flags = (
    keyword: string,
    available: string[],
    languages: string[],
    categories: string[],
  ) => {
    return (
      flagKeyword(keyword)
      && flagAvailable(available)
      && flagLanguage(languages)
      && flagCategory(categories)
    )
  }

  return {
    ebooks,
    length,
    lengthAll,
    keyword,
    available,
    language,
    categories,
  }
}
