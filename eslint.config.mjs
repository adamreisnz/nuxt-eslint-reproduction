import withNuxt from './.nuxt/eslint.config.mjs'

const cfg = await withNuxt(

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