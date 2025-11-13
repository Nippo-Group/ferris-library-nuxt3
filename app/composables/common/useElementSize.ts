import type { Ref } from 'vue'
import { ref, onMounted, onUnmounted } from 'vue'

/**
 * エレメントのサイズをリアクティブに取得する
 * @param element 対象となるエレメント
 * @returns width 対象のエレメントの幅
 */
export const useElementSize = (element: Ref<HTMLElement | undefined>) => {
  const width = ref(0)

  const handleResize = () => {
    width.value = element.value?.offsetWidth ?? 0
  }

  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return {
    width,
  }
}
