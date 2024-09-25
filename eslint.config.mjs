import stylistic from '@stylistic/eslint-plugin' // importも追加
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.vue', '**/*.ts'],
    rules: {
      'no-console': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  // ここから追加
  stylistic.configs.customize({
    indent: 2, // インデントはスペース2
    quotes: 'single', // クオートはシングル
    semi: false, // セミコロンは不要
  }),
)
