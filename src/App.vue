<template>
  <div class="min-h-screen text-gray-900">
    <header class="bg-white shadow">
      <div class="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <div class="text-lg font-semibold">Cayan Prola</div>
        <nav class="space-x-4">
          <router-link to="/" class="text-sm hover:underline">Home</router-link>
          <router-link to="/about" class="text-sm hover:underline">About</router-link>
          <router-link to="/contact" class="text-sm hover:underline">Contact</router-link>
        </nav>
      </div>
    </header>

    <main class="mx-auto max-w-5xl px-6 py-10">
      <router-view />
    </main>

    <footer class="text-center text-sm text-gray-500 py-8">© Cayan Prola — Built with Vue + Vite</footer>
  </div>
</template>

<script setup>
// Nothing specific here — routing and components live in /src/pages
</script>

<style>
/* small page-level tweaks handled by Tailwind */
</style>
