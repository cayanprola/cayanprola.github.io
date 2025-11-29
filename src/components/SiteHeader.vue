<template>
  <header class="bg-white/60 backdrop-blur sticky top-0 z-30 border-b">
    <div class="mx-auto max-w-5xl px-6 py-3 flex items-center justify-between">
      <div class="text-lg font-semibold">Cayan Prola</div>
      <nav class="flex items-center gap-4 text-sm">
        <router-link to="/" class="hover:underline">Home</router-link>
        <router-link to="/projects" class="hover:underline">Projects</router-link>
        <router-link to="/about" class="hover:underline">About</router-link>
        <router-link to="/contact" class="hover:underline">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
// small header component
</script>

<style scoped>
header { backdrop-filter: blur(6px); }
</style>
