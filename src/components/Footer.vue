<script setup lang="ts">
interface Social {
  name: string
  link: string
  icon: string
}

const socials: Social[] = [
  { name: 'mailto', link: 'mailto:2210227279@qq.com', icon: 'i-carbon-email' },
  { name: 'github', link: 'https://github.com', icon: 'i-carbon-logo-github' },
]
</script>

<template>
  <footer class="footer" text="xl gray" flex flex-col items-start justify-start bg-black p-6>
    <div class="footer-social" flex justify-start gap-4 text-size-base text-white>
      <a v-for="item in socials" :key="item.name" :class="item.icon" :href="item.link" target="_blank" />
    </div>
    <a mt-2 text-base class="footer-join" href="" target="_blank">Join us</a>
    <div class="footer-content" flex gap-4 text="sm gray">
      <span>Author: chillcicada</span>
      <span>Background: F0rest</span>
    </div>
  </footer>
</template>

<style scoped>

</style>
