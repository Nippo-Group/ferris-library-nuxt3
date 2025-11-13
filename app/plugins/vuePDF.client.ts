import { VuePDF, usePDF } from '@tato30/vue-pdf'

declare module '#app' {
  interface NuxtApp {
    $usePDF: typeof usePDF
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $usePDF: typeof usePDF
  }
}
export interface PDFOptions {
  src: string
  page?: number
  scale?: number
}

export default defineNuxtPlugin((nuxtApp) => {
  // SSGビルド時はスキップ
  if (import.meta.server) return

  if (import.meta.client) {
    try {
      nuxtApp.vueApp.component('VuePDF', VuePDF)
      nuxtApp.provide('usePDF', usePDF)
    }
    catch (error) {
      // eslint-disable-next-line no-console
      console.error('VuePDF plugin initialization failed:', error)
    }
  }
})
