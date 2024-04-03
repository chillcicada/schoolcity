import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-config/flat'

export default antfu({
  formatter: true,
  unocss,
  exclude: ['pnpm-lock.yaml'],
})
