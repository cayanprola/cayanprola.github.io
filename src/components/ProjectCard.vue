<template>
  <article class="bg-white rounded-2xl shadow-md overflow-hidden transform transition hover:-translate-y-2">
    <figure class="h-44 bg-gray-100 flex items-center justify-center overflow-hidden">
      <img :src="project.image" :alt="project.title" class="w-full object-cover h-full"/>
    </figure>
    <div class="p-4">
      <h3 class="text-lg font-semibold">{{ project.title }}</h3>
      <p class="text-sm text-gray-600 mt-1 line-clamp-2">{{ project.blurb }}</p>
      <div class="flex items-center justify-between mt-3">
        <div class="text-xs text-gray-500">{{ project.tech.join(' • ') }}</div>
        <router-link :to="`/projects/${project.slug}`" class="text-sm text-blue-600 hover:underline">View</router-link>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({ project: Object })
</script>

<style scoped>
.line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden }
</style>
