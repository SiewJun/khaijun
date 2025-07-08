<template>
  <div class="min-h-screen bg-background">
    <div class="fixed top-4 right-4 z-50">
      <ThemeToggle />
    </div>
    <NavBar />
    <main class="md:pt-20 pb-24 md:pb-8">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/nav-bar.vue'
import ThemeToggle from '@/components/theme-toggle.vue'
import { RouterView } from 'vue-router'
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
