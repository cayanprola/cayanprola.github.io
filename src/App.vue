<template>
  <main>
    <h1>Hi — I'm Cayan</h1>
    <p>This is a minimal Vue-powered portfolio starter. Replace this with your content.</p>
    <form @submit.prevent="submitForm">
      <label>
        Name
        <input v-model="form.name" required />
      </label>
      <label>
        Email
        <input v-model="form.email" type="email" required />
      </label>
      <label>
        Message
        <textarea v-model="form.message" required></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  </main>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({ name: '', email: '', message: '' })

async function submitForm() {
  // placeholder — update URL to your backend when ready
  try {
    await fetch('https://your-backend.example.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    alert('Message sent — replace with a nicer success UI')
    form.name = form.email = form.message = ''
  } catch (err) {
    console.error(err)
    alert('Failed to send — see console')
  }
}
</script>

<style>
main { max-width: 720px; margin: 2rem auto; font-family: system-ui, sans-serif }
form { display: grid; gap: 0.75rem; margin-top: 1rem }
input, textarea { padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc }
button { padding: 0.5rem 1rem }
</style>
