<script setup lang="ts">
import { getLS, putLS } from '@/utils'

interface Props {
  id: number
  type: string
  content: string
  options: Record<string, string>
}

const props = defineProps<Props>()

const input = ref(getLS(`jsd-level-issue-${props.id.toString()}`) || '')
const changeable = ref<boolean>(getLS('jsd-level-issue-changeable') || true)

function updateChecked(value: string) {
  putLS(`jsd-level-issue-${props.id.toString()}`, value)
}

onMounted(() => {
  const selected = getLS(`jsd-level-issue-${props.id.toString()}`)
  if (selected)
    input.value = selected

  const _changeable = getLS('jsd-level-issue-changeable') as boolean
  if (_changeable)
    changeable.value = _changeable
})
</script>

<template>
  <div class="issue-card">
    <div v-if="props.type === 'single'" class="issue-card-single">
      <div class="issue-content">
        {{ props.content }}
      </div>
      <NRadioGroup v-model:value="input" :on-update-checked="updateChecked(input)" class="issue-options">
        <NSpace justify="center">
          <NRadio v-for="(option, key) in props.options" :key="key" :value="key" class="issue-option" :disabled="!changeable">
            {{ option }}
          </NRadio>
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
