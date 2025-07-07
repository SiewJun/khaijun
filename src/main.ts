import './assets/main.css'

function initTheme() {
  const savedTheme = localStorage.getItem('ui-theme')

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = savedTheme === 'dark' || (savedTheme !== 'light' && prefersDark)

  document.documentElement.classList.toggle('dark', isDark)
}

initTheme()

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
