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
  <footer class="footer" text="xl gray left" flex flex-col p-6>
    <div class="footer-social" flex justify-start gap-4 text-size-base text-white>
      <a v-for="item in socials" :key="item.name" :class="item.icon" :href="item.link" target="_blank" />
    </div>
    <a class="footer-join" mt-2 text-base href="" target="_blank">Join us</a>
    <div class="footer-content" flex text="sm gray right" justify-end>
      Author: chillcicada | Background: F0rest
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--md-sys-color-background, #000);
}

.footer-join {
  color: var(--md-sys-color-on-background, #fff);
  font-weight: bold;
}
</style>
