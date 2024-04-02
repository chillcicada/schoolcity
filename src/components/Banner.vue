<script setup lang="ts">
import { randomSize } from '@/utils'

const props = defineProps<{
  left: string
  right: string
}>()

const isShow = ref<boolean>(true)
</script>

<template>
  <Transition name="banner">
    <div v-show="isShow" class="banner" @click="isShow = false">
      <span class="banner-line-top" banner-line top-0 />
      <span class="banner-content" font-serif>
        <div class="banner-left" flex="~ col" items-center justify-center>
          <span v-for="(char, index) in props.left" :key="char" :class="index === 0 ? 'banner-char' : 'banner-char'" :style="`--char-font-size: ${randomSize()}px`">
            {{ char }}
          </span>
        </div>
        <div class="banner-right" flex="~ col" items-center justify-center>
          <span v-for="(char, index) in props.right" :key="char" :class="index === 0 ? 'banner-char-marked' : 'banner-char'" :style="`--char-font-size: ${randomSize()}px;`">
            {{ char }}
          </span>
        </div>
      </span>
      <span class="banner-line-bottom" banner-line bottom-0 />
      <div i-carbon-arrow-right fixed bottom-0 right-0 m-1 cursor-pointer rounded text-3xl color-hex-e87334 @click="isShow = false" />
    </div>
  </Transition>
</template>

<style>
@keyframes banner-background {
  0% {
    background-color: black;
  }
  100% {
    background-color: color-mix(in srgb, #ece0df, transparent);
  }
}

@keyframes banner-line {
  0% {
    height: 0;
  }
  100% {
    height: 50%;
  }
}

@keyframes banner-content {
  0% {
    scale: 0.8;
    opacity: 0;
  }
  100% {
    scale: 1;
    opacity: 1;
  }
}

.banner-leave-from {
  opacity: 1;
}

.banner-leave-to {
  opacity: 0;
}

.banner-leave-active {
  transition: all 0.5s ease-out;
}
</style>

<style scoped>
.banner {
  z-index: 10;
  backdrop-filter: blur(2rem);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation-name: banner-background;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
}

.banner-line-top,
.banner-line-bottom {
  animation-name: banner-line;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
}

.banner-content {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  color: #EB7334;
  animation-name: banner-content;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
}

.banner-char,
.banner-char-marked {
  font-size: var(--char-font-size, 1rem);
  transition: color 0.3s;
}

.banner-char-marked {
  background-color: #EB7334;
  color: white;
}
</style>
