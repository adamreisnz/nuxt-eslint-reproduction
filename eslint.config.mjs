import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import withNuxt from './.nuxt/eslint.config.mjs'

const cfg = await withNuxt(
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  }
)

//Log defined globals
cfg.forEach(rule => {
  console.log(rule.name)
  console.log(rule.languageOptions?.globals)
})

export default cfg