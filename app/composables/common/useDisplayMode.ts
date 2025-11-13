export const useDisplayMode = () => {
  type Mode = 'public' | 'private'
  const mode = ref<Mode>('public')

  const setMode = () => {
    try {
      const route = useRoute()
      const query = route.query.mode
      if (query === 'private') {
        mode.value = 'private'
      }
      else {
        mode.value = 'public'
      }
    }
    catch {
      // SSG生成時やNuxtインスタンスが利用できない場合はデフォルト値を使用
      mode.value = 'public'
    }
  }
  setMode()

  return {
    mode,
  }
}
