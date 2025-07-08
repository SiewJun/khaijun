<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-12">
      <h1 class="text-4xl font-bold text-foreground mb-4">Get In Touch</h1>
      <p class="text-lg text-muted-foreground">Let's Talk</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Contact Information -->
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-bold text-foreground mb-6">Contact Information</h2>

          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail class="w-5 h-5 text-primary" />
              </div>
              <div>
                <p class="text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:siewkhaijun57@gmail.com"
                  class="text-foreground hover:text-primary transition-colors"
                >
                  siewkhaijun57@gmail.com
                </a>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone class="w-5 h-5 text-primary" />
              </div>
              <div>
                <p class="text-sm text-muted-foreground">Phone</p>
                <a
                  href="tel:+60113947577"
                  class="text-foreground hover:text-primary transition-colors"
                >
                  +60 11-394 7577
                </a>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin class="w-5 h-5 text-primary" />
              </div>
              <div>
                <p class="text-sm text-muted-foreground">Location</p>
                <p class="text-foreground">Cheras, Selangor, Malaysia</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div>
          <h3 class="text-xl font-semibold text-foreground mb-4">Connect With Me</h3>
          <div class="flex gap-4">
            <a
              href="https://www.linkedin.com/in/khai-jun-siew-aa35322b7/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Linkedin class="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://github.com/SiewJun"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Github class="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div>
        <h2 class="text-2xl font-bold text-foreground mb-6">Send a Message</h2>

        <form action="https://formspree.io/f/xdkzvjbl" method="POST" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="firstName" class="block text-sm font-medium text-foreground mb-2">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                class="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label for="lastName" class="block text-sm font-medium text-foreground mb-2">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                class="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              class="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium text-foreground mb-2">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              class="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              class="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            ></textarea>
          </div>

          <Button type="submit" class="w-full"> Send Message </Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
</script>
