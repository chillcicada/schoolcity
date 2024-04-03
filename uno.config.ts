import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify({
      prefix: 'uno-',
    }),
    presetIcons({ scale: 1.5 }),
    presetUno(),
    presetTypography(),
    presetWebFonts({
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
