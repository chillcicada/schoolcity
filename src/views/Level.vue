<script setup lang="ts">
import Issues from '@/json/issues.json'
import { getLS, putLS } from '@/utils'

const length = Issues.length

const router = useRouter()
const idx = ref(0)
const score = ref(0)

function commit() {
  putLS('jsd-level-issue-changeable', false)
  router.push('/result')
}

function getScore(i: number) {
  const selected = getLS(`jsd-level-issue-${Issues[i].id.toString()}`)
  if (selected === Issues[i].answer)
    score.value++
}
</script>

<template>
  <div v-for="(issue, index) in Issues" v-show="idx === index" :key="issue.id" class="issue">
    <div>{{ idx + 1 }} | {{ length }}</div>
    <div>{{ score }}</div>
    <IssueCard :id="issue.id" :ref="`issue${idx}`" :content="issue.content" :options="issue.options" :type="issue.type" :answer="issue.answer" />
    <button :disabled="idx === 0 ? true : false" @click="idx--, getScore(idx)">
      Prev
    </button>
    <button :disabled="idx === length - 1 ? true : false" @click="idx++, getScore(idx)">
      Next
    </button>
    <button @click="commit">
      Commit
    </button>
  </div>
</template>

<style scoped>
.issue {
  border: 1px solid black;
  color: var(--md-sys-color-secondary);
  font-size: 12px;
}
</style>
