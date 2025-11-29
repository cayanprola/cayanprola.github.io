<template>
  <div class="min-h-screen text-gray-900">
    <SiteHeader />

    <main class="mx-auto max-w-5xl px-6 py-10">
      <router-view />
    </main>

    <SiteFooter />

  </div>
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

// Nothing specific here — routing and components live in /src/pages
</script>

<style>
/* small page-level tweaks handled by Tailwind */
</style>
