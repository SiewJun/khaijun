<template>
  <div :class="['unified-card', cardClass]">
    <!-- Header section -->
    <div v-if="title || subtitle || $slots.header" class="mb-6">
      <slot name="header">
        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h3 v-if="title" class="text-responsive-subheading text-emphasis mb-2">
              {{ title }}
            </h3>
            <p v-if="subtitle" class="text-primary font-medium">
              {{ subtitle }}
            </p>
          </div>
          <div v-if="badge" class="text-responsive-small text-subtle text-right">
            {{ badge }}
          </div>
        </div>
      </slot>
    </div>

    <!-- Content -->
    <div v-if="description || $slots.default" class="card-spacing">
      <p v-if="description" class="text-responsive-body text-subtle leading-relaxed">
        {{ description }}
      </p>
      <slot />
    </div>

    <!-- Footer section -->
    <div v-if="tags?.length || $slots.footer" class="mt-6 pt-6 border-t border-border/50">
      <slot name="footer">
        <SkillTags v-if="tags?.length" :items="tags" />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import SkillTags from './SkillTags.vue'

interface Props {
  title?: string
  subtitle?: string
  description?: string
  badge?: string
  tags?: string[]
  cardClass?: string
}

withDefaults(defineProps<Props>(), {
  cardClass: '',
})
</script>
