import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vitest'],
      dts: 'src/auto-import.d.ts',
    }),
    Components({
      dts: 'src/components.d.ts',
      resolvers: [NaiveUiResolver()],
    }),
    Unocss(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    transformer: 'lightningcss',
  },
  build: {
    cssMinify: 'lightningcss',
  },
})
