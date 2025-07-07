<script setup lang="ts">
import { Sun, Moon, Laptop } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { useThemeStore } from '@/stores/theme'
import { onMounted } from 'vue'

const themeStore = useThemeStore()

const themes = ['light', 'dark', 'system'] as const

function nextTheme() {
  const idx = themes.indexOf(themeStore.theme)
  const next = themes[(idx + 1) % themes.length]
  themeStore.setTheme(next)
}

onMounted(() => {
  themeStore.init()
})
</script>

<template>
  <Button
    variant="ghost"
    size="icon"
    class="relative size-9 rounded-full"
    @click="nextTheme"
    :aria-label="`Switch theme (current: ${themeStore.theme})`"
  >
    <Sun v-if="themeStore.theme === 'light'" class="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />
    <Moon v-if="themeStore.theme === 'dark'" class="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />
    <Laptop v-if="themeStore.theme === 'system'" class="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
