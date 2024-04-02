<script setup lang="ts">

</script>

<template>
  <main class="main" flex-1 p-8 text-center text-xl>
    <Header />
    <div flex flex-col>
      TODO: 不想 do 了qaq
      <span>© 2024 JSD DEV LAB</span>
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.main {
  background-color: var(--md-sys-color-on-background, #fff);
}

.title {
  color: var(--md-sys-color-background, #000);
}

.subtitle {
  opacity: 0.5;
  border-left: 4px solid var(--md-sys-color-background, #000);
}
</style>
