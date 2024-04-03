<script setup lang="ts">
import Issues from '@/json/issues.json'
import { useLevelResultStore, useLevelScoreboardStore } from '@/store'
import { getLS, putLS } from '@/utils'

const length = Issues.length

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
  Issues.forEach((issue) => {
    scoreboard.answers.set(`jsd-level-issue-${issue.id}`, issue.answer)
  })
}

function commit() {
  putLS('jsd-level-issue-done', true)
  scoreboard.done = true
  result.setLevel(scoreboard.getScore())
}

onMounted(() => {
  initLocalStore()
  initScoreboard()
})
</script>

<template>
  <Transition name="level-test">
    <div v-if="!scoreboard.done">
      <TransitionGroup name="issue" tag="div">
        <div>{{ idx + 1 }} | {{ length }}</div>
        <div v-for="(issue, index) in Issues" v-show="idx === index" :key="issue.id" class="issue" m-auto backdrop-blur-sm>
          <IssueCard :id="issue.id" :ref="`issue${idx}`" :content="issue.content" :options="issue.options" :type="issue.type" :answer="issue.answer" />
        </div>
        <button :disabled="idx === 0 ? true : false" btn @click="idx--">
          Prev
        </button>
        <button :disabled="idx === length - 1 ? true : false" btn @click="idx++">
          Next
        </button>
        <button btn @click="commit">
          Commit
        </button>
      </TransitionGroup>
    </div>

    <div v-else class="level-result" h-full flex="~ col" backdrop-blur-2px>
      <main class="level-result" text="center 2xl" flex-1 bg-coolgray bg-op-20 p-8 dark:bg-black dark:bg-op-20>
        <div>
          <div i-carbon-warning inline-block text-5xl />
        </div>
        <div>
          恭喜您完成了全部测试！
        </div>
        <RouterLink to="/level/result" flex flex-col items-center justify-center text-xl class="link-to-result">
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
@keyframes flashing {
  0% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0.5;
  }
}

.issue-move {
  transition: all 0.5s ease;
}

.issue-enter, .issue-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.issue-leave-active {
  position: absolute;
}
@keyframes slideIn {
  from {
    transform: translateY(20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

<style scoped>
#footer {
  animation-name: slideIn;
  animation-duration: 1s;
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
