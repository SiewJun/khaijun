<template>
  <div class="min-h-screen bg-background">
    <div class="fixed top-4 right-4 z-50">
      <ThemeToggle />
    </div>
    <NavBar />
    <main class="md:pt-20 pb-24 md:pb-8">
      <RouterView />
    </main>
    <!-- Scroll to Top Button -->
    <Button
      v-if="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-24 right-8 z-50 p-3 rounded-full shadow-lg transition-opacity hover:opacity-80 focus:outline-none"
      aria-label="Scroll to top"
    >
      <ChevronUp class="w-6 h-6" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from '@/components/nav-bar.vue'
import ThemeToggle from '@/components/theme-toggle.vue'
import { RouterView } from 'vue-router'
import { ChevronUp } from 'lucide-vue-next'
import { Button } from './components/ui/button'

const showScrollTop = ref(false)

function handleScroll() {
  showScrollTop.value = window.scrollY > 200
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: hsl(var(--muted));
}

::-webkit-scrollbar-thumb {
  background: hsl(var(--muted-foreground));
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--primary));
}

/* Improved focus states */
:focus-visible {
  outline: 2px solid hsl(var(--primary));
  outline-offset: 2px;
}
</style>
