<script setup lang="ts">
import { Sun, Moon, Laptop } from 'lucide-vue-next'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { useThemeStore } from '@/stores/theme'
import { onMounted } from 'vue'

const themeStore = useThemeStore()

const themes = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Laptop },
] as const

function setTheme(theme: (typeof themes)[number]['value']) {
  themeStore.setTheme(theme)
}

onMounted(() => {
  themeStore.init()
})
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        variant="ghost"
        size="icon"
        class="relative size-9 rounded-full"
        :aria-label="`Switch theme (current: ${themeStore.theme})`"
      >
        <Sun v-if="themeStore.theme === 'light'" class="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />
        <Moon v-if="themeStore.theme === 'dark'" class="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />
        <Laptop
          v-if="themeStore.theme === 'system'"
          class="h-[1.2rem] w-[1.2rem]"
          aria-hidden="true"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-32">
      <DropdownMenuItem
        v-for="theme in themes"
        :key="theme.value"
        @click="setTheme(theme.value)"
        class="flex items-center gap-2 cursor-pointer"
        :class="{ 'bg-accent': themeStore.theme === theme.value }"
      >
        <component :is="theme.icon" class="h-4 w-4" />
        <span class="text-sm">{{ theme.label }}</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
