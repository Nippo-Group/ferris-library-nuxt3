export const useLoading = () => {
  const loading = ref<boolean>(true)
  onMounted(() => {
    loading.value = false
  })

  return {
    loading,
  }
}
