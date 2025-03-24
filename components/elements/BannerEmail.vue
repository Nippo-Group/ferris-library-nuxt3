<script setup lang="ts">
type State = {
  address: string
}
defineProps<State>()

const copyMessage = ref<string>('copy')
const repeat = ref<number>()

const copyToClipboard = (address: string) => {
  navigator.clipboard
    .writeText(address)
    .then(() => {
      copyMessage.value = 'copied!'
      repeat.value = window.setInterval(setCopyMessage, 3000)
    })
    .catch((e) => {
      copyMessage.value = `error:${e}`
    })
}
const setCopyMessage = () => {
  copyMessage.value = 'copy'
  clearInterval(repeat.value)
}
</script>

<template>
  <VBanner
    lines="one"
    :stacked="false"
  >
    <icons-email-defult
      start
      size="large"
      color="primary"
    />
    {{ address }}

    <VTooltip
      :text="copyMessage"
      location="top"
    >
      <template #activator="{ props }">
        <VBtn
          icon
          v-bind="props"
          variant="text"
          @click="copyToClipboard(address)"
        >
          <icons-content-copy />
        </VBtn>
      </template>
    </VTooltip>
  </VBanner>
</template>
