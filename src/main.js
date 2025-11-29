import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './styles/index.css'

const routes = [
	{ path: '/', component: () => import('./pages/Home.vue') },
	{ path: '/contact', component: () => import('./pages/Contact.vue') },
	{ path: '/about', component: () => import('./pages/About.vue') },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

createApp(App).use(router).mount('#app')
