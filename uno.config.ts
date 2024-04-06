import process from 'node:process'

import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'

import axios from 'axios'
import { HttpProxyAgent } from 'http-proxy-agent'
import dotenv from 'dotenv'

dotenv.config({ path: './.env.local' })

async function fetchWebFonts(url: string) {
  const agent: string = process.env.HTTP_PROXY_AGENT || ''
  if (agent)
    return axios.get(url, { httpAgent: new HttpProxyAgent(agent) }).then(res => res.data)
  // it seems that without explicit agent, axios will use the system global proxy, :)
  return axios.get(url).then(res => res.data)
}

export default defineConfig({
  presets: [
    presetAttributify({
      prefix: 'uno-',
    }),
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
    ['btn', 'px-4 py-1 rounded-4 inline-block text-black bg-pink dark:text-gray-2 cursor-pointer !outline-none  disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['banner-line', 'w-1px h-50% absolute fixed bg-hex-e87334'],
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
