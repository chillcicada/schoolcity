<script setup lang="ts">
import { applyTheme, themeFromImage } from '@material/material-color-utilities'
import Banner from '@/components/Banner.vue'
import backgroundUrl from '@/assets/media/background_by_F0rest.webp'

const background = ref<HTMLImageElement | null>(null)

async function setBackgroundTheme() {
  if (background.value) {
    const theme = await themeFromImage(background.value)
    applyTheme(theme, { dark: window.matchMedia('(prefers-color-scheme: dark)').matches, target: document.documentElement })
  }
}

watch(background, setBackgroundTheme, { once: true })
</script>

<template>
  <img id="background" ref="background" :src="backgroundUrl" alt="background">
  <div id="overlay" />
  <Banner />
  <RouterView />
</template>

<style scoped>
#background {
  display: block;
  position: fixed;
  margin: 0 auto;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  object-fit: cover;
  object-position: center;
  max-width: var(--max-width);
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
}
</style>
