<template>
  <div class="flex flex-wrap gap-2">
    <span v-for="item in items" :key="item" class="skill-tag">
      {{ item }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  items: string[]
}

defineProps<Props>()
</script>
