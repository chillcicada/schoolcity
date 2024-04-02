<script setup lang="ts">
import { toggleDark } from './composables'
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fade">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <div fixed right-6 top-6 text-3xl>
    <button @click="toggleDark()">
      <div text="yellow dark:gray-1" class="i-carbon-sun dark:i-carbon-moon" />
    </button>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-from {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-to {
  opacity: 1;
}
</style>
