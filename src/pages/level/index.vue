<script setup lang="ts">
import Issues from '@/json/issues.json'
// import Results from '@/json/results.json'
import { useLevelResultStore, useLevelScoreboardStore } from '@/store'
import { clearLS, getLS, putLS } from '@/utils'

const length = Issues.length

const idx = ref(0)
const scoreboard = useLevelScoreboardStore()
const result = useLevelResultStore()
// const router = useRouter()
// const level = ref<keyof typeof Results>()

const isDone = ref<boolean>(getLS('jsd-level-issue-done') === 'true')

function initLocalStore() {
  if (!isDone.value) {
    isDone.value = false
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
  isDone.value = true
  result.setLevel(scoreboard.getScore())
  // level.value = result.level
}

onMounted(() => {
  initLocalStore()
  initScoreboard()
})
</script>

<template>
  <Transition name="level-test">
    <div v-if="!isDone">
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
        <button btn @click="clearLS">
          Clear
        </button>
      </TransitionGroup>
    </div>

    <div v-else class="level-result" h-full flex="~ col">
      <main class="level-result" text="center 2xl" flex-1 p-8>
        <div>
          <div i-carbon-warning inline-block text-5xl />
        </div>
        <div>
          恭喜您完成了全部测试！
        </div>
        <RouterLink to="/level/result" flex flex-col items-center justify-center text-xl>
          <div id="chevron-right" i-carbon-chevron-right inline-block />
          <div inline-block>
            点击查看结果
          </div>
        </RouterLink>
        <!-- <div>
          您获得了称号：{{ Results[level!].title }}
        </div>
        <div>
          {{ result.level }}
        </div> -->
      </main>
      <Footer id="footer" />
    </div>
  </Transition>
</template>

<style scoped>
#chevron-right,
#chevron-right::before,
#chevron-right::after {
  color: #9880ff;
  animation-name: flashing;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  display: inline-block;
}

#chevron-right::before {
  left: -1.25rem;
  content: 'i-carbon-chevron-right';
  animation-delay: 0s;
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
}

#chevron-right {
  animation-delay: 0.5s;
  width: 1.25rem;
  height: 1.25rem;
  position: relative;
}

#chevron-right::after {
  left: 1.25rem;
  content: 'i-carbon-chevron-right';
  animation-delay: 1s;
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
}
</style>

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
</style>

<route lang="yaml">
meta:
  layout: level
</route>
