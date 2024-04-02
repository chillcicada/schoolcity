<script setup lang="ts">
import { useLevelScoreboardStore } from '@/store'
import { getLS, putLS } from '@/utils'

interface Props {
  id: number
  type: string
  content: string
  options: Record<string, string>
}

const props = defineProps<Props>()
const id = `jsd-level-issue-${props.id}`
const scoreboard = useLevelScoreboardStore()

const input = ref(getLS(id) || '')

function updateChecked(value: string) {
  scoreboard.inputs.set(id, value)
  putLS(id, value)
}

onMounted(() => {
  const selected = getLS(id)
  if (selected)
    input.value = selected
})
</script>

<template>
  <div class="issue-card">
    <div v-if="props.type === 'single'" class="issue-card-single">
      <div class="issue-content">
        {{ props.content }}
      </div>
      <div v-if="scoreboard.done">
        你已经提及了答案，无法更改了qaq。
      </div>
      <NRadioGroup v-model:value="input" :on-update-checked="updateChecked(input)" class="issue-options" :disabled="scoreboard.done">
        <NSpace justify="center" vertical>
          <NRadioButton v-for="(option, key) in props.options" :key="key" :value="key" class="issue-option">
            {{ option }}
          </NRadioButton>
        </NSpace>
      </NRadioGroup>
    </div>
    <div v-else-if="props.type === 'multiple'" class="issue-card-multiple" />
    <div v-else-if="props.type === 'input'" class="issue-card-input" />
    <div v-else />
  </div>
</template>

<style scoped>
.issue-card {
  margin: auto;
  padding: 20px;
  width: 80%;
  border: none;
  border-radius: 5px;
  background-color: #fff8;
}

.issue-option {
  font-size: 16px;
}
</style>
