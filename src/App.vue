<script setup lang="ts">
import { toggleDark } from './composables'
</script>

<template>
  <RouterView />
  <div fixed right-6 top-6 text-3xl>
    <button @click="toggleDark()">
      <div text="yellow dark:gray-1" class="i-carbon-sun dark:i-carbon-moon" />
    </button>
  </div>
</template>
