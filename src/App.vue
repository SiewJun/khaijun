<template>
  <div class="min-h-screen bg-background">
    <div class="fixed top-4 right-4 z-50">
      <ThemeToggle />
    </div>
    <NavBar />
    <main class="md:pt-20 pb-24 md:pb-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <RouterView />
      </div>
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
</style>
