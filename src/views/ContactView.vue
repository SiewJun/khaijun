<template>
  <SectionContainer title="Get In Touch" subtitle="Let's connect and discuss opportunities">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      <!-- Contact Information -->
      <div class="space-y-8">
        <!-- Contact Details -->
        <UnifiedCard title="Contact Information">
          <div class="space-y-6">
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20"
              >
                <Mail class="w-5 h-5 text-primary" />
              </div>
              <div>
                <p class="text-responsive-small text-subtle font-medium">Email</p>
                <a
                  href="mailto:siewkhaijun57@gmail.com"
                  class="text-responsive-body text-emphasis hover:text-primary transition-colors"
                >
                  siewkhaijun57@gmail.com
                </a>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20"
              >
                <Phone class="w-5 h-5 text-primary" />
              </div>
              <div>
                <p class="text-responsive-small text-subtle font-medium">Phone</p>
                <a
                  href="tel:+60113947577"
                  class="text-responsive-body text-emphasis hover:text-primary transition-colors"
                >
                  +60 11-394 7577
                </a>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20"
              >
                <MapPin class="w-5 h-5 text-primary" />
              </div>
              <div>
                <p class="text-responsive-small text-subtle font-medium">Location</p>
                <p class="text-responsive-body text-emphasis">Cheras, Selangor, Malaysia</p>
              </div>
            </div>
          </div>
        </UnifiedCard>

        <!-- Social Links -->
        <UnifiedCard title="Connect With Me">
          <div class="flex gap-4">
            <a
              href="https://www.linkedin.com/in/khai-jun-siew-aa35322b7/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 border border-primary/20"
            >
              <Linkedin class="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://github.com/SiewJun"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 border border-primary/20"
            >
              <Github class="w-5 h-5 text-primary" />
            </a>
          </div>
        </UnifiedCard>
      </div>

      <!-- Contact Form -->
      <UnifiedCard title="Send Me a Message">
        <form action="https://formspree.io/f/xdkzvjbl" method="POST" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                for="firstName"
                class="block text-responsive-small font-medium text-emphasis mb-2"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                class="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
            </div>
            <div>
              <label
                for="lastName"
                class="block text-responsive-small font-medium text-emphasis mb-2"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                class="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          <div>
            <label for="email" class="block text-responsive-small font-medium text-emphasis mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              class="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            />
          </div>

          <div>
            <label for="subject" class="block text-responsive-small font-medium text-emphasis mb-2">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              class="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            />
          </div>

          <div>
            <label for="message" class="block text-responsive-small font-medium text-emphasis mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              class="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-300"
            ></textarea>
          </div>

          <Button type="submit" class="w-full py-3 font-medium"> Send Message </Button>
        </form>
      </UnifiedCard>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import SectionContainer from '@/components/SectionContainer.vue'
import UnifiedCard from '@/components/UnifiedCard.vue'
</script>
