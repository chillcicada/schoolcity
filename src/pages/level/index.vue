<script setup lang="ts">
import { issues } from '@/scripts'
import { useLevelResultStore, useLevelScoreboardStore } from '@/store'
import { getLS, putLS } from '@/utils'

const length = issues.length

const idx = ref(0)
const scoreboard = useLevelScoreboardStore()
const result = useLevelResultStore()

function initLocalStore() {
  scoreboard.done = getLS('jsd-level-issue-done') === 'true'
  if (!scoreboard.done) {
    scoreboard.done = false
    putLS('jsd-level-issue-done', false)
  }
}

function initScoreboard() {
  issues.forEach((issue) => {
    scoreboard.answers.set(`jsd-level-issue-${issue.id}`, issue.answer)
  })
}

function commit() {
  putLS('jsd-level-issue-done', true)
  scoreboard.done = true
  result.setLevel(scoreboard.getScore())
}

initLocalStore()

onMounted(() => {
  initScoreboard()
})
</script>

<template>
  <Transition name="slide">
    <div v-if="!scoreboard.done" flex="~ col" h-full px-6 py-12>
      <div class="line-x" fixed bottom-18 left-0 z--1 h-2px w-full bg-white color-white opacity-50 />
      <div class="line-y" fixed right-10 top-0 z--1 h-full w-2px bg-white color-white opacity-50 />
      <div text-left>
        {{ idx + 1 }} / {{ length }}
      </div>
      <TransitionGroup name="slide" tag="div">
        <div v-for="(issue, index) in issues" v-show="idx === index" :key="issue.id" class="issue" absolute w-full px-4>
          <IssueCard :id="issue.id" :ref="`issue${idx}`" :content="issue.content" :options="issue.options" :type="issue.type" :answer="issue.answer" />
        </div>
      </TransitionGroup>
      <div class="buttons" absolute bottom-30 flex gap-4>
        <button :disabled="idx === 0" py-2 btn @click="idx--">
          Prev
        </button>
        <button :disabled="idx === length - 1" py-2 btn @click="idx++">
          Next
        </button>
        <Transition name="button" mode="out-in">
          <button v-show="idx === length - 1" py-2 btn @click="commit">
            Commit
          </button>
        </Transition>
      </div>
    </div>
  </Transition>
  <Transition name="fade">
    <div v-if="scoreboard.done" class="level-result" h-full flex="~ col" backdrop-blur-2px>
      <main class="level-result" text="center 2xl" flex-1 bg-coolgray bg-op-20 px-8 py-16 dark:bg-black dark:bg-op-20>
        <div>
          <div i-carbon-warning inline-block text-5xl />
        </div>
        <div>
          恭喜您完成了全部测试！
        </div>
        <RouterLink to="/level/result" class="link-to-result" mt-2 flex flex-col items-center justify-center text-xl hover:rounded-5 hover:bg-gray hover:bg-op-50>
          <div>
            <div id="chevron-right-left" i-carbon-chevron-right inline-block />
            <div id="chevron-right" i-carbon-chevron-right inline-block />
            <div id="chevron-right-right" i-carbon-chevron-right inline-block />
          </div>
          <div inline-block>
            点击查看结果
          </div>
        </RouterLink>
      </main>
      <Footer id="footer" />
    </div>
  </Transition>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes flashing {
  0% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0.5;
  }
}
</style>

<style scoped>
.button-move,
.button-enter-active,
.button-leave-active {
  transition: all 0.5s ease-out;
}

.button-enter-from,
.button-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.line-x,
.line-y {
  box-shadow: 0 0 20px 5px white;
}

#footer {
  animation-name: fadeIn;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

#chevron-right,
#chevron-right-left,
#chevron-right-right {
  color: var(--md-sys-color-error);
  animation-name: flashing;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  display: inline-block;
}

#chevron-right-left {
  animation-delay: 0s;
}

#chevron-right {
  animation-delay: 0.5s;
}

#chevron-right-right {
  animation-delay: 1s;
}

.issue,
.buttons {
  left: 50%;
  transform: translateX(-50%);
}

.level-result {
  transition: all 0.5s ease !important;
}

.link-to-result:hover {
  color: var(--md-sys-color-primary);
}
</style>

<route lang="yaml">
meta:
  layout: level
</route>
