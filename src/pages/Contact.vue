<template>
  <section class="max-w-2xl">
    <h2 class="text-2xl font-semibold">Contact</h2>
    <p class="text-gray-700">Send a message — this form calls your backend contact endpoint.</p>

    <form @submit.prevent="submitForm" class="mt-6 grid gap-3">
      <input v-model="form.name" placeholder="Name" required class="p-2 rounded border"/>
      <input v-model="form.email" type="email" placeholder="Email" required class="p-2 rounded border"/>
      <textarea v-model="form.message" rows="6" placeholder="Message" required class="p-2 rounded border"></textarea>
      <div class="flex gap-2">
        <button class="px-4 py-2 bg-blue-600 text-white rounded" :disabled="loading">Send</button>
        <span v-if="success" class="text-green-600">Message sent</span>
        <span v-if="error" class="text-red-600">{{ error }}</span>
      </div>
    </form>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', message: '' })
const loading = ref(false)
const success = ref(false)
const error = ref('')

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'

async function submitForm () {
  loading.value = true
  error.value = ''
  success.value = false

  try {
    // endpoint is controlled by VITE_API_URL in production, otherwise uses localhost
    const res = await fetch(`${API_BASE}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    if (!res.ok) throw new Error((await res.json()).message || 'Failed')

    success.value = true
    form.name = form.email = form.message = ''
  } catch (err) {
    console.error(err)
    error.value = 'Failed to send — check console/your backend'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
</style>
