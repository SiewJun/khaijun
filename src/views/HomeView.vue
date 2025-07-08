<template>
  <SectionContainer
    containerClass="min-h-screen flex items-center justify-center -mt-16 sm:-mt-20 relative overflow-hidden"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Enhanced animated blobs -->
      <div
        class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-blob1"
      />
      <div
        class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob2"
      />
      <div
        class="absolute top-1/2 right-1/3 w-80 h-80 bg-accent/10 rounded-full blur-2xl animate-blob3"
      />
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
            View Resume
          </a>
          <RouterLink
            to="/projects"
            class="border border-input text-foreground px-8 py-4 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium transform hover:-translate-y-1"
            >View Projects
          </RouterLink>
        </div>

        <!-- Social Media Links -->
        <div class="flex justify-center gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/khai-jun-siew-aa35322b7/"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 border border-primary/20"
            aria-label="LinkedIn"
          >
            <Linkedin class="w-5 h-5 text-primary" />
          </a>
          <a
            href="https://github.com/SiewJun"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 border border-primary/20"
            aria-label="GitHub"
          >
            <Github class="w-5 h-5 text-primary" />
          </a>
        </div>
      </div>
    </div>
  </SectionContainer>

  <!-- Scroll to Top Button -->
  <button
    v-show="showScrollTop"
    @click="scrollToTop"
    class="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
    aria-label="Scroll to top"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionContainer from '@/components/SectionContainer.vue'
import { Linkedin, Github } from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const heroRef = ref<HTMLElement | null>(null)
const showScrollTop = ref(false)

onMounted(() => {
  if (heroRef.value) {
    const timeline = gsap.timeline({ delay: 0.2 })

    // Get specific elements for more controlled animation
    const heading = heroRef.value.querySelector('h1')
    const subtitleParagraph = heroRef.value.querySelector('p:first-of-type')
    const locationParagraph = heroRef.value.querySelector('p:last-of-type')
    const ctaContainer = heroRef.value.querySelector('.flex')
    const ctaButtons = heroRef.value.querySelectorAll('a')
    const socialLinks = heroRef.value.querySelectorAll('.flex.justify-center.gap-4.mt-6 a')

    // Set initial states
    gsap.set([heading, subtitleParagraph, locationParagraph, ctaContainer], {
      opacity: 0,
      y: 30,
    })
    gsap.set(socialLinks, { opacity: 0, y: 20 })

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

    // Animate social links
    timeline.to(
      socialLinks,
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      },
      '-=0.4',
    )

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

  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 200
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
@keyframes blob1 {
  0%,
  100% {
    transform: scale(1) translateY(0) translateX(0);
  }
  50% {
    transform: scale(1.1) translateY(-20px) translateX(30px);
  }
}
@keyframes blob2 {
  0%,
  100% {
    transform: scale(1) translateY(0) translateX(0);
  }
  50% {
    transform: scale(1.15) translateY(30px) translateX(-40px);
  }
}
@keyframes blob3 {
  0%,
  100% {
    transform: scale(1) translateY(0) translateX(0);
  }
  50% {
    transform: scale(1.08) translateY(-25px) translateX(25px);
  }
}
.animate-blob1 {
  animation: blob1 12s ease-in-out infinite;
}
.animate-blob2 {
  animation: blob2 14s ease-in-out infinite;
}
.animate-blob3 {
  animation: blob3 16s ease-in-out infinite;
}
</style>
