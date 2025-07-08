<template>
  <section :class="['section-spacing', containerClass]" ref="sectionRef">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div v-if="title || subtitle" class="text-center mb-12 sm:mb-16" ref="headerRef">
        <h1 v-if="title" class="text-responsive-heading text-primary mb-4">
          {{ title }}
        </h1>
        <p v-if="subtitle" class="text-responsive-body text-subtle max-w-2xl mx-auto">
          {{ subtitle }}
        </p>
      </div>

      <!-- Content -->
      <div :class="['content-spacing', contentClass]" ref="contentRef">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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

const sectionRef = ref<HTMLElement | null>(null)
const headerRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (sectionRef.value) {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    if (headerRef.value) {
      timeline.from(
        headerRef.value.children,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power3.out',
        },
        0,
      )
    }

    if (contentRef.value) {
      // Animate direct children of content for better control
      const contentChildren = contentRef.value.children
      if (contentChildren.length > 0) {
        timeline.from(
          contentChildren,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
          },
          '-=0.4',
        )
      }
    }
  }
})
</script>
