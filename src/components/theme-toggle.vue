<script setup lang="ts">
import { Sun, Moon, Laptop } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { useThemeStore } from '@/stores/theme'
import { onMounted, computed } from 'vue'

const themeStore = useThemeStore()

const themes = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Laptop },
] as const

function cycleTheme() {
  const currentIdx = themes.findIndex((t) => t.value === themeStore.theme)
  const nextIdx = (currentIdx + 1) % themes.length
  themeStore.setTheme(themes[nextIdx].value)
}

const currentTheme = computed(() => themes.find((t) => t.value === themeStore.theme) || themes[0])

onMounted(() => {
  themeStore.init()
})
</script>

<template>
  <Button
    variant="ghost"
    size="icon"
    class="relative size-9 rounded-full"
    :aria-label="`Switch theme (current: ${currentTheme.label})`"
    @click="cycleTheme"
  >
    <component :is="currentTheme.icon" class="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
