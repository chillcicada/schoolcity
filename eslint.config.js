import antfu from '@antfu/eslint-config'

export default antfu({
  formatter: true,
  exclude: ['dist', 'node_modules', 'pnpm-lock.yaml'],
})
