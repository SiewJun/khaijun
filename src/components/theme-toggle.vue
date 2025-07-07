<script setup lang="ts">
import { Sun, Moon, Laptop } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useThemeStore } from '@/stores/theme'
import { onMounted } from 'vue'

const themeStore = useThemeStore()

// Initialize the theme when component mounts
onMounted(() => {
  themeStore.init()
})
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="icon" class="relative size-9 rounded-full">
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
    <DropdownMenuContent>
      <DropdownMenuItem @click="themeStore.setTheme('light')">
        <Sun class="mr-2 h-4 w-4" />
        <span>Light</span>
      </DropdownMenuItem>
      <DropdownMenuItem @click="themeStore.setTheme('dark')">
        <Moon class="mr-2 h-4 w-4" />
        <span>Dark</span>
      </DropdownMenuItem>
      <DropdownMenuItem @click="themeStore.setTheme('system')">
        <Laptop class="mr-2 h-4 w-4" />
        <span>System</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
