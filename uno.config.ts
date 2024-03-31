import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts } from 'unocss'
import axios from 'axios'
import { HttpProxyAgent } from 'http-proxy-agent'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetIcons({ scale: 1.5 }),
    presetUno(),
    presetTypography(),
    presetWebFonts({
      customFetch: (url: string) => axios.get(url, { httpsAgent: new HttpProxyAgent('http://127.0.0.1:7890') }).then(res => res.data),
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  shortcuts: [
    ['btn', 'p-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500'],
  ],
})
