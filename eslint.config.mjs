// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['components/elements/HtmlTextArea.vue'],
  rules: {
    'vue/no-v-html': 'off',
  },
})
