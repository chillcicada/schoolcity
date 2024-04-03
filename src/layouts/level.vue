<script setup lang="ts">
import { applyTheme, themeFromImage } from '@material/material-color-utilities'
import { isDark } from '@/composables'
import backgroundUrl from '@/assets/media/background_by_F0rest.webp'

const background = ref<HTMLImageElement | null>(null)

async function setBackgroundTheme() {
  if (background.value) {
    const theme = await themeFromImage(background.value)
    applyTheme(theme, { dark: isDark.value, target: document.body })
  }
}

onMounted(() => {
  setBackgroundTheme()
  watch(isDark, setBackgroundTheme)
})
</script>

<template>
  <Banner left="とある次世代の" right="超咖啡屋" />
  <img id="background" ref="background" :src="backgroundUrl" alt="background" object="cc cover" fixed z--2 block h-full w-full overflow-hidden overscroll-none>
  <Transition name="fade" mode="out-in">
    <div v-show="isDark" id="overlay" fixed left-0 top-0 z--1 block h-full w-full overflow-hidden overscroll-none />
  </Transition>
  <main flex="1 col" h-full text-center text-2xl>
    <RouterView />
  </main>
</template>

<style>
/* if the color in dork isn't transparent, the background color will be not transparent */
:root,
html.dark {
  --bg-color: transparent;
}

#background {
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
}

#overlay {
  background-color: color-mix(in srgb, black, transparent);
}
</style>
