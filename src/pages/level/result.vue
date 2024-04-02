<script setup lang="ts">
import Results from '@/json/results.json'
import { useLevelResultStore } from '@/store'

const result = useLevelResultStore()
</script>

<template>
  <div h-full flex="~ col">
    <main class="level-result" flex="~ 1 col" text="center 2xl" p-8 py-20>
      <div h-full rounded-2 bg-coolgray bg-op-20 p-1 font-serif filter-drop-shadow-color-op-10>
        <div>
          你的等级是：{{ result.level }} | {{ Results[result.level].title }}
        </div>
        <div>
          {{ Results[result.level].description }}
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<route lang="yaml">
meta:
  layout: level
</route>

<style scoped>
.level-result {
  backdrop-filter: blur(10px);
}
</style>
