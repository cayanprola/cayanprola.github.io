<template>
  <footer class="border-t mt-12 py-8 text-center text-sm text-gray-600">
    <div class="max-w-5xl mx-auto px-6">
      <div class="mb-2">© {{ year }} Cayan Prola — Built with Vue + Vite</div>
      <div class="space-x-3">
        <a href="https://github.com/cayanprola" class="hover:underline">GitHub</a>
        <a href="#" class="hover:underline">LinkedIn</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
footer { background: transparent }
</style>
