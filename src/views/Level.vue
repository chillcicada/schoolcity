<script setup lang="ts">
import { Issues } from '@/scripts/issues'
</script>

<template>
  <div v-for="issue in Issues" :key="issue.id" class="issue">
    <h1>{{ issue.content }}</h1>
    <NRadioGroup v-model:value="issue.input.value" :on-update-checked="console.log('zzz')">
      <NSpace justify="center">
        <NRadio v-for="(option, index) in issue.options" :key="index" :value="index">
          {{ option }}
        </NRadio>
      </NSpace>
    </NRadioGroup>
  </div>
</template>

<style scoped>
.issue {
  border: 1px solid black;
  color: var(--md-sys-color-secondary);
  font-size: 12px;
}
</style>
