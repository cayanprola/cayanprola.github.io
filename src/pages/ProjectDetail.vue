<template>
  <div v-if="project" class="prose max-w-none md:prose-xl">
    <h1 class="text-3xl font-bold">{{ project.title }}</h1>
    <div class="text-gray-600 mt-2">{{ project.blurb }}</div>

    <div class="mt-6">
      <img :src="project.image" :alt="project.title" class="rounded-lg shadow-md w-full object-cover max-h-72" />
    </div>

    <div class="mt-6">
      <h2 class="text-xl font-semibold">About this project</h2>
      <p class="mt-2">This is a placeholder case study. Replace with background, your role, technology and outcomes.</p>
      <ul class="mt-3 list-disc pl-5 text-gray-700">
        <li>Problem: explain the challenge.</li>
        <li>Approach: outline your solution & architecture.</li>
        <li>Outcome: results and links (live / code).</li>
      </ul>
    </div>

    <div class="mt-6 flex gap-3">
      <router-link to="/projects" class="text-sm text-gray-700 hover:underline">← Back to projects</router-link>
      <a href="#" class="px-3 py-1 rounded bg-blue-600 text-white text-sm">View source</a>
    </div>
  </div>

  <div v-else>
    <p>Project not found — <router-link to="/projects">back to projects</router-link></p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { projects } from '../data/projects'

const route = useRoute()
const project = projects.find(p => p.slug === route.params.slug)
</script>

<style scoped>
</style>
