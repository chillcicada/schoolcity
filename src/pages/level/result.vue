<script setup lang="ts">
import Results from '@/json/results.json'
import MagicUrl from '@/assets/media/magic.png'
import ScienceUrl from '@/assets/media/science.png'
import { useLevelResultStore, useLevelScoreboardStore } from '@/store'

const scoreboard = useLevelScoreboardStore()
const result = useLevelResultStore()

onMounted(() => {
  result.setLevel(scoreboard.getScore())
})
</script>

<template>
  <div class="line-x" fixed left-0 top-22 h-2px w-full bg-white color-white />
  <div class="line-y" fixed left-10 top-0 h-full w-2px bg-white color-white />

  <div h-full flex="~ col">
    <main class="level-result" flex="~ 1 col" text="center 2xl" p-8 py-20 backdrop-blur-2px>
      <div class="level-result-container" h-full rounded-2 bg-coolgray bg-op-20 p-2 font-serif filter-drop-shadow-color-op-10 dark:bg-black dark:bg-op-20>
        <div flex items-center justify-between>
          <div class="text-glow" ml-2 text-5xl>
            {{ result.level }}
          </div>
          <img id="image" :src="Math.random() < 0.5 ? MagicUrl : ScienceUrl" alt="image" h-auto w-100px>
        </div>
        <div text-3xl class="text-glow">
          {{ Results[result.level].title }}
        </div>
        <div text-left class="text-glow">
          {{ Results[result.level].description }}
        </div>
      </div>
    </main>
    <Footer z-9 />
  </div>
</template>

<route lang="yaml">
meta:
  layout: level
</route>

<style>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<style scoped>
level-result-container {
  transition: all 0.3s ease-in-out !important;
}

.line-x,
.line-y {
  box-shadow: 0 0 30px 10px white;
}

#image {
  filter: brightness(100%);
  -webkit-filter: brightness(100%);
  transition: filter 0.5, -webkit-filter 0.5;
  animation-name: rotate;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

#image:hover {
  filter: brightness(120%);
  -webkit-filter: brightness(120%);
}

.text-glow {
  text-shadow: 0 0 20px var(--md-sys-color-primary-container), 0 0 30px var(--md-sys-color-primary-container);
}
</style>
