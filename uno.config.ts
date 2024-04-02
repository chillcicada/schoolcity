import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts } from 'unocss'
import axios from 'axios'
import { HttpProxyAgent } from 'http-proxy-agent'

async function fetchWebFonts(url: string) {
  try {
    return axios.get(url, { httpsAgent: new HttpProxyAgent('http://127.0.0.1:7890') }).then(res => res.data)
  }
  catch (e) {
    console.error(e)
    console.warn('[Proxy Error] Failed to fetch web fonts with default proxy, fallback to default fetcher for google.')
    return axios.get(url).then(res => res.data)
  }
}

export default defineConfig({
  presets: [
    presetAttributify(),
    presetIcons({ scale: 1.5 }),
    presetUno(),
    presetTypography(),
    presetWebFonts({
      customFetch: fetchWebFonts,
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
  ],
})
