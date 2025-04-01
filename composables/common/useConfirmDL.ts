export const useConfirmDL = () => {
  const visible = useState<boolean>()
  const fileName = useState<string>()
  const fileType = useState<string>()
  const fileUrl = useState<string>()

  const show = (getName: string, getUrl: string, getType: string): void => {
    if (getName && getUrl && getType) {
      fileName.value = getName
      fileType.value = getType
      fileUrl.value = getUrl
      visible.value = true
      timeOut()
    }
  }
  const dismiss = () => {
    if (visible.value) visible.value = false
  }
  const timeOut = () => window.setTimeout(dismiss, 6000)

  return {
    visible: readonly(visible),
    fileName: readonly(fileName),
    fileType: readonly(fileType),
    fileUrl: readonly(fileUrl),
    show,
    dismiss,
  }
}
