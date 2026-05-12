export const useDisplayMode = () => {
  // モードの型
  type Mode = 'public' | 'private'

  // モードの状態管理
  const mode = ref<Mode>('public')

  // モードがPublicか
  const isPublic = computed(() => mode.value === 'public')
  // モードがPrivateか
  const isPrivate = computed(() => mode.value === 'private')

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
    isPublic,
    isPrivate,
  }
}
