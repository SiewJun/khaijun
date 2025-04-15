<script setup lang="ts">
import NavBar from '@/components/nav-bar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-background">
    <NavBar />
    <main class="pt-24 container mx-auto px-4">
      <RouterView />
    </main>
  </div>
</template>
