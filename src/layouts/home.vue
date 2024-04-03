<script setup lang="ts">

</script>

<template>
  <main class="main" flex-1 p-8 text="center gray-7 dark:gray-3 xl">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<style scoped></style>
