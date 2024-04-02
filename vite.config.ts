import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import WebFontDownload from 'vite-plugin-webfont-dl'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vitest', 'pinia'],
      dts: 'src/auto-import.d.ts',
      vueTemplate: true,
    }),
    Components({
      dts: 'src/components.d.ts',
      resolvers: [NaiveUiResolver()],
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
    }),
    Unocss(),
    VueDevTools(),
    WebFontDownload(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/': `${resolve(__dirname, 'src')}/`,
    },
  },
  css: {
    transformer: 'lightningcss',
  },
  build: {
    cssMinify: 'lightningcss',
  },
})
