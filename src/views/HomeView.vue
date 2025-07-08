<template>
  <SectionContainer
    containerClass="min-h-screen flex items-center justify-center -mt-16 sm:-mt-20 relative overflow-hidden"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"
      ></div>
    </div>

    <div class="text-center max-w-4xl mx-auto relative z-10">
      <!-- Hero Section -->
      <div ref="heroRef" class="space-y-8">
        <div class="space-y-6">
          <h1 class="text-responsive-hero text-foreground font-bold">
            Hi, I'm
            <span class="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
              >Khai Jun</span
            >
          </h1>
          <p class="text-responsive-body text-subtle max-w-2xl mx-auto leading-relaxed">
            Software Engineering student passionate about building impactful applications and
            solutions
          </p>
        </div>

        <!-- Call to Action -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://drive.google.com/file/d/1qhMpsU237TwnPKhUtGLzWt0i3cWgYJF2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View My Resume
          </a>
          <RouterLink
            to="/contact"
            class="border border-input text-foreground px-8 py-4 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium transform hover:-translate-y-1"
          >
            Get In Touch
          </RouterLink>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionContainer from '@/components/SectionContainer.vue'

gsap.registerPlugin(ScrollTrigger)

const heroRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (heroRef.value) {
    const timeline = gsap.timeline({ delay: 0.2 })

    // Get specific elements for more controlled animation
    const heading = heroRef.value.querySelector('h1')
    const subtitleParagraph = heroRef.value.querySelector('p:first-of-type')
    const locationParagraph = heroRef.value.querySelector('p:last-of-type')
    const ctaContainer = heroRef.value.querySelector('.flex')
    const ctaButtons = heroRef.value.querySelectorAll('a')

    // Set initial states
    gsap.set([heading, subtitleParagraph, locationParagraph, ctaContainer], {
      opacity: 0,
      y: 30,
    })

    // Animate heading with a subtle scale effect
    timeline.to(heading, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    })

    // Animate subtitle
    timeline.to(
      subtitleParagraph,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.6',
    )

    // Animate location text
    timeline.to(
      locationParagraph,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.4',
    )

    // Animate CTA buttons with stagger
    timeline.to(
      ctaContainer,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.2',
    )

    // Add subtle floating animation to the heading
    gsap.to(heading, {
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
      delay: 2,
    })

    // Add hover animations for CTA buttons
    ctaButtons.forEach((button) => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out',
        })
      })

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        })
      })
    })
  }
})
</script>
