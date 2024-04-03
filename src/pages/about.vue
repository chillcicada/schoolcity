<script setup lang="ts">
import qqUrl from '@/assets/media/qq.webp'
</script>

<template>
  <div text="left 2xl">
    欢迎加入次世代开发部喵~
  </div>
  <img id="qq" :src="qqUrl" alt="qq" my-2 rounded-10>
</template>

<style scoped>
#qq {
  box-shadow: 2px 2px 2px #0003;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
