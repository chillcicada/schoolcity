<script setup lang="ts">
import { applyTheme, themeFromImage } from '@material/material-color-utilities'
import backgroundUrl from '@/assets/media/background_by_F0rest.webp'

const background = ref<HTMLImageElement | null>(null)

async function setBackgroundTheme() {
  if (background.value) {
    const theme = await themeFromImage(background.value)
    applyTheme(theme, { dark: window.matchMedia('(prefers-color-scheme: dark)').matches, target: document.body })
  }
}

watch(background, setBackgroundTheme, { once: true })
</script>

<template>
  <Banner left="とある次世代の" right="超咖啡屋" />
  <div id="overlay" />
  <img id="background" ref="background" :src="backgroundUrl" alt="background">
  <div class="container">
    <RouterView />
  </div>
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
  background-color: color-mix(in srgb, var(--md-sys-color-background),transparent);
  overflow-y: hidden;
  overscroll-behavior: none;
}

.container {
  overflow: auto;
  max-height: calc(70vh);
}
</style>
