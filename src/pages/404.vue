<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main class="not-found" text="center xl" flex-1 p-8>
    <Header />
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <div>
      Not Found
    </div>
    <button m-3 text-sm btn @click="router.back()">
      Back
    </button>
  </main>
  <Footer />
</template>

<style scoped>
.not-found {
  background-color: var(--md-sys-color-on-background, #fff);
}
</style>
