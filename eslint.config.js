import antfu from '@antfu/eslint-config'

export default antfu({
  formatter: true,
  unocss: true,
  exclude: ['dist', 'node_modules', 'pnpm-lock.yaml'],
})
