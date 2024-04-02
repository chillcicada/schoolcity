<script setup lang="ts">
import Issues from '@/json/issues.json'
import Results from '@/json/results.json'
import { useLevelResultStore, useLevelScoreboardStore } from '@/store'
import { clearLS, getLS, putLS } from '@/utils'

const length = Issues.length

const idx = ref(0)
const scoreboard = useLevelScoreboardStore()
const result = useLevelResultStore()
const level = ref<keyof typeof Results>()

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
  level.value = result.level
}

// function getScore(i: number) {
//   const selected = getLS(`jsd-level-issue-${Issues[i].id.toString()}`)
//   if (selected === Issues[i].answer)
//     score.value++
// }

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

    <div v-else class="level-result">
      <div>
        恭喜您完成了全部测试！
      </div>
      <div>
        您获得了称号：{{ Results[level!].title }}
      </div>
      <div>
        {{ result.level }}
      </div>
    </div>
  </Transition>
</template>

<style>
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
</style>
