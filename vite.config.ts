import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'
import Unocss from 'unocss/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import VueRouter from 'unplugin-vue-router/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import WebFontDownload from 'vite-plugin-webfont-dl'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// fuck the config, maybe i should migrate it to nuxt3. :(
export default defineConfig({
  plugins: [
    VueMacros({
      defineOptions: false,
      defineModels: false,
      plugins: {
        vue: vue({
          script: {
            propsDestructure: true,
            defineModel: true,
          },
        }),
      },
    }),
    AutoImport({
      imports: ['vue', 'vitest', 'pinia', '@vueuse/core', VueRouterAutoImports, { 'vue-router/auto': ['useLink'] }],
      dts: 'src/auto-import.d.ts',
      vueTemplate: true,
      dirs: [],
    }),
    Components({
      dts: 'src/components.d.ts',
      resolvers: [NaiveUiResolver()],
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
    }),
    Layouts(),
    Unocss(),
    VueRouter({
      extensions: ['.vue'],
      dts: 'src/router.d.ts',
    }),
    VueDevTools(),
    WebFontDownload(['https://fonts.googleapis.com/css2?family=DM+Sans&family=DM+Serif+Display&family=DM+Mono&display=swap'], {
      injectAsStyleTag: true,
      minifyCss: true,
      async: true,
      cache: true,
      proxy: false,
    }),
  ],
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
    },
  },
  css: {
    transformer: 'lightningcss',
  },
  build: {
    cssMinify: 'lightningcss',
  },
  test: {
    mockReset: true,
    restoreMocks: true,
    include: ['src/__tests__\/*.{spec,test}.ts'],
    environment: 'jsdom',
  },
})
