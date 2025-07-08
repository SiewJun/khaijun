<template>
  <SectionContainer containerClass="min-h-screen flex items-center justify-center -mt-16 sm:-mt-20">
    <div class="text-center max-w-4xl mx-auto">
      <!-- Hero Section -->
      <div class="space-y-8">
        <div class="space-y-6">
          <h1 class="text-responsive-hero text-foreground">
            Hi, I'm <span class="text-primary">Khai Jun</span>
          </h1>
          <p class="text-responsive-body text-subtle max-w-2xl mx-auto">
            Software Engineering student passionate about building impactful applications and
            solutions
          </p>
          <p class="text-responsive-small text-subtle">
            From Cheras, Selangor • Final Year Student at Universiti Malaysia Sabah
          </p>
        </div>

        <!-- Call to Action -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://drive.google.com/file/d/1qhMpsU237TwnPKhUtGLzWt0i3cWgYJF2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
          >
            View My Resume
          </a>
          <RouterLink
            to="/contact"
            class="border border-input text-foreground px-8 py-4 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium"
          >
            Get In Touch
          </RouterLink>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SectionContainer from '@/components/SectionContainer.vue'
</script>
