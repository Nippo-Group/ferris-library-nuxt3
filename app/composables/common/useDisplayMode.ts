export const useDisplayMode = () => {
  // モードの型
  type Mode = 'public' | 'private'

  // モードの状態管理
  const mode = ref<Mode>('public')

  // ルーターのインスタンスを取得
  const route = useRoute()

  // モードがPublicか
  const isPublic = computed(() => mode.value === 'public')
  // モードがPrivateか
  const isPrivate = computed(() => mode.value === 'private')

  // URLクエリのmodeパラメータをもとにモードを設定する関数
  const setMode = () => {
    try {
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

  // 初期化時にモードを設定
  setMode()

  // URLクエリのmodeパラメータを監視してモードを切り替える
  watch(
    () => route.query.mode,
    () => {
      setMode()
    },
  )

  return {
    mode,
    isPublic,
    isPrivate,
  }
}
