<template>
  <section :class="['section-spacing', containerClass]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div v-if="title || subtitle" class="text-center mb-12 sm:mb-16">
        <h1 v-if="title" class="text-responsive-heading text-primary mb-4">
          {{ title }}
        </h1>
        <p v-if="subtitle" class="text-responsive-body text-subtle max-w-2xl mx-auto">
          {{ subtitle }}
        </p>
      </div>

      <!-- Content -->
      <div :class="['content-spacing', contentClass]">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  containerClass?: string
  contentClass?: string
}

withDefaults(defineProps<Props>(), {
  containerClass: '',
  contentClass: '',
})
</script>
