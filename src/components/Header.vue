<script setup lang="ts">
interface AltRoute {
  name: string
  path: string
  decs: string
}

const routes: AltRoute[] = [
  {
    name: 'level',
    path: '/level',
    decs: '等级测试',
  },
  {
    name: 'stay-tuned',
    path: '',
    decs: '敬请期待...',
  },
]
</script>

<template>
  <div class="header" text-left dark:text-gray-2>
    <div mb-4>
      <RouterLink class="title" text-5xl font-serif to="/">
        JSD DEV LAB
      </RouterLink>
      <div class="subtitle" mt-2 border-l-4 border-l-gray pl-2 text-base>
        某<del>次世代</del>的神秘部门
      </div>
    </div>
    <div class="content" flex flex-col>
      <li v-for="route in routes" :key="route.name" my-2 inline-flex py-1 text-4xl transition>
        <RouterLink :to="route.path" class="link" transition-all hover:text-shadow-lg dark:hover:text-shadow-color-gray-2>
          {{ route.decs }}
        </RouterLink>
      </li>
    </div>
  </div>
</template>

<style scoped>
</style>
