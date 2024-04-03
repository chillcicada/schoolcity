<script setup lang="ts">
import { NDivider } from 'naive-ui'
import Results from '@/json/results.json'
import MagicUrl from '@/assets/media/magic.png'
import ScienceUrl from '@/assets/media/science.png'
import { useLevelResultStore, useLevelScoreboardStore } from '@/store'
import { clearLS, putLS } from '@/utils'

const scoreboard = useLevelScoreboardStore()
const result = useLevelResultStore()
const router = useRouter()

function reset() {
  clearLS()
  putLS('jsd-level-issue-done', false)
  scoreboard.done = false
  result.setLevel(0)
  router.push('/level')
}

onMounted(() => {
  result.setLevel(scoreboard.getScore())
})
</script>

<template>
  <div class="line-x" fixed left-0 top-18 h-2px w-full bg-white color-white />
  <div class="line-y" fixed left-10 top-0 h-full w-2px bg-white color-white />

  <div h-full flex="~ col">
    <main class="level-result" flex="~ 1 col" text="center 2xl" px-8 py-16 backdrop-blur-2px>
      <div class="level-result-container" h-full rounded-2 bg-coolgray bg-op-20 p-2 font-serif filter-drop-shadow-color-op-10 dark:bg-black dark:bg-op-20>
        <div flex items-center justify-center gap-3>
          <div class="text-glow" text-5xl>
            {{ result.level }}
          </div>
          <img id="image" :src="Math.random() < 0.5 ? MagicUrl : ScienceUrl" alt="image" h-auto w-100px>
        </div>
        <div text-3xl class="text-glow">
          {{ Results[result.level].title }}
        </div>
        <div class="text-glow" px-2 text-left>
          {{ Results[result.level].description }}
        </div>
        <button inline-block cursor-pointer rounded-5 bg-transparent px-4 py-2 text-xl text-gray-7 outline-none dark:text-gray-4 hover:backdrop-blur-2 @click.once="reset()">
          不满意？再来一次！
        </button>
        <NDivider px-4 color-gray-8 dark:color-gray-2 style="--n-color: var(--md-sys-color-on-background)">
          E N D
        </NDivider>
        <div text-xl>
          感谢您的参与！
          如果您对次世代开发部有兴趣，欢迎<u cursor-pointer @click="router.push('/about')">加入我们</u>！
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
  text-shadow: 0 0 20px var(--md-sys-color-on-background), 0 0 30px var(--md-sys-color-on-background);
}
</style>
