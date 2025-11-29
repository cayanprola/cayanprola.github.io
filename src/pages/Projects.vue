<template>
  <section class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold">Projects</h1>
        <p class="text-gray-600 mt-1">Selected work — case studies and small builds.</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectCard v-for="p in projects" :key="p.slug" :project="p" />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'
</script>

<style scoped>
</style>
