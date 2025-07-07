<template>
  <div class="px-4 py-12">
    <div class="max-w-6xl mx-auto">
      <!-- Hero Section -->
      <div class="text-center mb-20">
        <div class="mb-16">
          <h1 class="text-4xl md:text-6xl font-bold text-foreground mb-4">Hi, I'm Khai Jun</h1>
          <p class="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Software Engineering student passionate about building impactful applications and
            solutions
          </p>
          <p class="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
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
      <div>
        <div class="flex items-center justify-between mb-2">
          <h2 class="text-base font-semibold text-muted-foreground">Featured Projects</h2>
          <RouterLink
            to="/work"
            class="text-muted-foreground hover:text-primary text-xs font-normal underline underline-offset-2"
          >
            View All →
          </RouterLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div class="bg-card rounded border border-muted shadow-sm p-3 flex items-center gap-3">
            <div class="flex-shrink-0 flex flex-col items-center">
              <BotMessageSquare class="w-5 h-5 text-primary/70 mb-1" />
              <span class="text-[10px] text-muted-foreground">AI Assistant</span>
            </div>
            <div>
              <div class="text-sm font-medium text-foreground mb-0.5">AI Assistant Project</div>
              <div class="text-xs text-muted-foreground mb-1">
                Frontend for an AI assistant in a greenfield Employee Trust Fund's mobile app.
              </div>
              <div class="flex flex-wrap gap-1">
                <span class="px-1.5 py-0.5 bg-primary/10 text-primary rounded-full text-[10px]"
                  >Vue.js</span
                >
                <span class="px-1.5 py-0.5 bg-primary/10 text-primary rounded-full text-[10px]"
                  >TypeScript</span
                >
                <span class="px-1.5 py-0.5 bg-primary/10 text-primary rounded-full text-[10px]"
                  >AI</span
                >
              </div>
            </div>
          </div>

          <div class="bg-card rounded border border-muted shadow-sm p-3 flex items-center gap-3">
            <div class="flex-shrink-0 flex flex-col items-center">
              <CheckSquare class="w-5 h-5 text-primary/70 mb-1" />
              <span class="text-[10px] text-muted-foreground">EcoSync</span>
            </div>
            <div>
              <div class="text-sm font-medium text-foreground mb-0.5">
                EcoSync Final Year Project
              </div>
              <div class="text-xs text-muted-foreground mb-1">
                Platform connecting consumers with solar companies for quotations and communication.
              </div>
              <div class="flex flex-wrap gap-1">
                <span class="px-1.5 py-0.5 bg-primary/10 text-primary rounded-full text-[10px]"
                  >PERN</span
                >
                <span class="px-1.5 py-0.5 bg-primary/10 text-primary rounded-full text-[10px]"
                  >Maps</span
                >
                <span class="px-1.5 py-0.5 bg-primary/10 text-primary rounded-full text-[10px]"
                  >Stripe</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { BotMessageSquare, CheckSquare } from 'lucide-vue-next'
</script>
