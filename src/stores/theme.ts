import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

type Theme = 'light' | 'dark' | 'system'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<Theme>('system')
  const isLoaded = ref(false)

  function init() {
    const savedTheme = localStorage.getItem('ui-theme') as Theme | null

    if (savedTheme) {
      theme.value = savedTheme
    } else {
      theme.value = 'system'
    }

    applyTheme()
    isLoaded.value = true
  }

  function isDarkMode(): boolean {
    if (theme.value === 'dark') return true
    if (theme.value === 'light') return false

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  function applyTheme() {
    const isDark = isDarkMode()
    document.documentElement.classList.toggle('dark', isDark)
  }

  function setTheme(newTheme: Theme) {
    theme.value = newTheme
    localStorage.setItem('ui-theme', newTheme)
    applyTheme()
  }

  if (typeof window !== 'undefined') {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (theme.value === 'system') {
        applyTheme()
      }
    })
  }

  watch(theme, () => {
    applyTheme()
  })

  return { theme, isLoaded, init, setTheme, isDarkMode }
})
