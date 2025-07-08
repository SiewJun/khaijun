<template>
  <div class="px-4 py-12">
    <div class="max-w-6xl mx-auto">
      <!-- Hero Section -->
      <div class="text-center mb-20">
        <div class="mb-16">
          <h1 class="text-responsive-hero font-bold text-foreground mb-4">Hi, I'm Khai Jun</h1>
          <p class="text-responsive-subheading text-muted-foreground mb-8 max-w-2xl mx-auto">
            Software Engineering student passionate about building impactful applications and
            solutions
          </p>
          <p class="text-responsive-body text-muted-foreground mb-8 max-w-xl mx-auto">
            From Cheras, Selangor • Final Year Student at Universiti Malaysia Sabah
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://drive.google.com/file/d/1qhMpsU237TwnPKhUtGLzWt0i3cWgYJF2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              View My Resume
            </a>
            <RouterLink
              to="/contact"
              class="border border-input text-foreground px-8 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
            >
              Get In Touch
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Recent Work Preview -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
