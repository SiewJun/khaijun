<template>
  <div class="relative overflow-hidden" ref="headerRef">
    <!-- Background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary/20 to-transparent"
      ></div>
    </div>

    <!-- Content -->
    <div class="text-center space-y-6 py-16 sm:py-20 md:py-24">
      <div class="space-y-4">
        <!-- Title with enhanced styling -->
        <h1 class="text-responsive-heading font-bold text-primary relative inline-block">
          {{ title }}
          <div
            class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-primary/30 rounded-full"
          ></div>
        </h1>

        <!-- Subtitle with better spacing and typography -->
        <p class="text-responsive-body text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
          {{ subtitle }}
        </p>
      </div>

      <!-- Optional decorative element -->
      <div class="flex justify-center">
        <div class="w-1 h-1 bg-primary/40 rounded-full"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

defineProps<{
  title: string
  subtitle: string
}>()

const headerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (headerRef.value) {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.value,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    // Get elements for animation
    const decorativeLine = headerRef.value.querySelector('.absolute.w-px')
    const title = headerRef.value.querySelector('h1')
    const titleUnderline = headerRef.value.querySelector('.absolute.-bottom-2')
    const subtitle = headerRef.value.querySelector('p')
    const decorativesDot = headerRef.value.querySelector('.w-1.h-1')

    // Set initial states
    gsap.set([decorativeLine, title, titleUnderline, subtitle, decorativesDot], {
      opacity: 0,
      y: 20,
    })

    // Animate elements in sequence
    timeline
      .to(decorativeLine, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
      .to(
        title,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.4',
      )
      .to(
        titleUnderline,
        {
          opacity: 1,
          scaleX: 0,
          transformOrigin: 'center',
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.2',
      )
      .to(titleUnderline, {
        scaleX: 1,
        duration: 0.8,
        ease: 'power2.out',
      })
      .to(
        subtitle,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.6',
      )
      .to(
        decorativesDot,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: 'back.out(1.7)',
        },
        '-=0.3',
      )
  }
})
</script>
