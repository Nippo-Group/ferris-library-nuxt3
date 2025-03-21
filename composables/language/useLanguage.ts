import type { Lang } from '@/types/lang'

export const useLanguage = () => {
  const state = useState<Lang>('lang:state')

  const setLang = (lang: Lang) => {
    state.value = lang
  }

  type NameObject = {
    en: string
    ja: string
  }
  const getName = (): NameObject => {
    switch (state.value) {
      case 'en':
        return {
          en: 'English',
          ja: '英語',
        }
      default:
        return {
          en: 'Japanese',
          ja: '日本語',
        }
    }
  }

  return {
    langState: readonly(state),
    setLang,
    getName,
  }
}
