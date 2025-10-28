import { VuePDF, usePDF } from '@tato30/vue-pdf'

declare module '#app' {
  interface NuxtApp {
    $pdf: typeof usePDF
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $pdf: typeof usePDF
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    nuxtApp.vueApp.component('VuePDF', VuePDF)
    nuxtApp.provide('pdf', usePDF)

    return {
      provide: {
        pdf: usePDF,
      },
    }
  }
})
