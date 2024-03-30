import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  test: {
    mockReset: true,
    restoreMocks: true,
    include: ['**\/*.{spec,test}.ts'],
    environment: 'jsdom',
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    AutoImport({
      imports: ['vue', 'vitest', 'vue-router'],
      dts: false,
    }),
  ],
})
