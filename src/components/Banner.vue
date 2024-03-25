<script setup lang="ts">
const title = import.meta.env.VITE_APP_TITLE
</script>

<template>
  <div class="banner">
    <div class="title">
      {{ title }}
    </div>
  </div>
</template>

<style scoped>
.banner {
  top: 0;
  font-size: 32px;
}
</style>
