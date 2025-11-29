<template>
  <section class="space-y-8">
    <div class="grid md:grid-cols-2 gap-6 items-center">
      <div>
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">Designing <span class="text-blue-600">clean, usable</span> web experiences</h1>
        <p class="text-gray-700 mt-4 text-lg">I build web apps and interfaces with an emphasis on performance, accessibility and clear visuals. Here are a few projects I’m proud of.</p>
        <div class="mt-6 flex gap-3">
          <router-link to="/projects" class="px-4 py-2 rounded bg-gradient-to-r from-blue-500 to-teal-400 text-white">View projects</router-link>
          <router-link to="/contact" class="px-4 py-2 rounded border border-gray-200 text-sm">Contact me</router-link>
        </div>
      </div>

      <div class="hidden md:block">
        <div class="rounded-xl shadow-xl overflow-hidden border">
          <img src="https://images.unsplash.com/photo-1525373698159-9a4f9d3f9f7c?w=1600&q=60" alt="work sample" class="w-full object-cover h-64"/>
        </div>
      </div>
    </div>

    <section>
      <h2 class="text-2xl font-semibold">Featured projects</h2>
      <p class="text-gray-600 text-sm mt-1">A selection of recent work — click to view a case study.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <ProjectCard v-for="p in featured" :key="p.slug" :project="p" />
      </div>
    </section>
  </section>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'

const featured = projects.slice(0,2)
</script>

<style scoped>
button {
  font-weight: bold;
  background-color: #f3f6;
}
</style>
