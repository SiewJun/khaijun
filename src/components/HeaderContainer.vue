<template>
  <div class="mt-12 mb-12 md:mb-24">
    <h1 class="mt-4 text-responsive-heading font-bold text-primary mb-2">{{ title }}</h1>
    <p class="text-responsive-body text-muted-foreground">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>
