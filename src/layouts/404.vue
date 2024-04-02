<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main p="x4 y10" flex="1 col" text-center>
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <RouterView />
    <div>
      <button text-sm btn m="3 t4" @click="router.back()">
        Back
      </button>
    </div>
  </main>
  <Footer />
</template>
