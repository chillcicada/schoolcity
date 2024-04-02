<script setup lang="ts">
import { applyTheme, themeFromImage } from '@material/material-color-utilities'
import backgroundUrl from '@/assets/media/background_by_F0rest.webp'

const background = ref<HTMLImageElement | null>(null)

// const dark = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)
const dark = ref(true)

async function setBackgroundTheme() {
  if (background.value) {
    const theme = await themeFromImage(background.value)
    applyTheme(theme, { dark: dark.value, target: document.body })
  }
}

onMounted(() => {
  setBackgroundTheme()
  watch(dark, setBackgroundTheme)
})
</script>

<template>
  <Banner left="とある次世代の" right="超咖啡屋" />
  <div id="overlay" />
  <img id="background" ref="background" :src="backgroundUrl" alt="background">
  <!-- TODO: set transition when color change -->
  <!-- <button class="i-carbon-moon" @click="dark = !dark" /> -->
  <!-- <RouterView v-slot="{ Component }">
    <Transition>
      <component :is="Component" />
    </Transition>
  </RouterView> -->
  <RouterView />
</template>

<style scoped>
#background {
  display: block;
  position: fixed;
  object-fit: cover;
  object-position: center;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  max-width: var(--max-width);
  overflow-y: hidden;
  overscroll-behavior: none;
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
}

#overlay {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: color-mix(in srgb, black,transparent);
  overflow-y: hidden;
  overscroll-behavior: none;
}
</style>
