<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <button @click="router.back()">
    返回上一级
  </button>
</template>

<style scoped>

</style>
