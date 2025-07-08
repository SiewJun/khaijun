<template>
  <div class="max-w-4xl mx-auto">
    <HeaderContainer
      title="Personal Projects"
      subtitle="A showcase of my personal, academic, and self-learning projects."
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="project in projects"
        :key="project.title"
        class="bg-card rounded-lg border p-6 shadow-sm flex flex-col"
      >
        <img
          v-if="project.image"
          :src="project.image"
          :alt="project.title"
          class="mb-4 rounded-lg object-cover w-full h-40"
        />
        <h3 class="text-responsive-subheading font-semibold text-foreground mb-2">
          {{ project.title }}
        </h3>
        <p class="text-responsive-body text-muted-foreground mb-4">
          {{ project.description }}
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
            >{{ tag }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderContainer from '@/components/HeaderContainer.vue'

const projects = [
  {
    title: 'Portfolio Website (Competition)',
    description:
      'Built a static website with HTML, CSS, and Bootstrap for a university competition during my first year.',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    image: '/projects/kjuns-netlify-app.png',
  },
  {
    title: 'MyKPI (Web Assignment)',
    description:
      'Developed a simple web app to track Key Performance Indicators (KPIs) for university students using PHP.',
    tags: ['PHP', 'MySQL', 'HTML/CSS'],
    image: '/projects/mykpi.png',
  },
  {
    title: 'TourTailor (Web Assignment)',
    description:
      'Developed a travel booking website with Laravel, PHP, and Bootstrap for seamless user experience.',
    tags: ['Laravel', 'PHP', 'Bootstrap'],
    image: '/projects/tourtailor-web.png',
  },
  {
    title: 'TourTailor Kotlin (Mobile Assignment)',
    description:
      'Developed a travel booking app with Kotlin, Room for database management, and Firebase authentication.',
    tags: ['Kotlin', 'Room', 'Firebase'],
    image: '/projects/tourtailor-kotlin.png',
  },
  {
    title: 'JadepotCEX (Self-Learning)',
    description:
      'Created a prototype cryptocurrency exchange platform using PostgreSQL, Express.js, React.js, Node.js, and Coinbase API integration.',
    tags: ['PERN Stack', 'Coinbase API', 'Cryptocurrency'],
    image: '/projects/jadepotcex.png',
  },
  {
    title: 'Next.js Dashboard (Self-Learning)',
    description:
      'Learned Next.js using the course provided by Vercel, building a comprehensive dashboard application.',
    tags: ['Next.js', 'React', 'Vercel'],
    image: '/projects/nextjs-dashboard.png',
  },
  {
    title: 'EcoSync (Final Year Project)',
    description:
      'Developed a platform connecting consumers with solar companies for quotations and communication using PERN stack with Google Maps integration.',
    tags: ['PERN Stack', 'Google Maps', 'Stripe'],
    image: '/projects/ecosync.png',
  },
]
</script>
