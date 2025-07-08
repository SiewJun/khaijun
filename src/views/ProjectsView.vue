<template>
  <SectionContainer
    title="Personal Projects"
    subtitle="A showcase of my personal, academic, and self-learning projects"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="project in projects" :key="project.title" class="unified-card">
        <img
          v-if="project.image"
          :src="project.image"
          :alt="project.title"
          class="mb-6 rounded-lg object-cover w-full h-48 border border-border/50"
        />

        <div class="space-y-4">
          <h3 class="text-responsive-subheading text-emphasis">
            {{ project.title }}
          </h3>
          <p class="text-responsive-body text-subtle leading-relaxed">
            {{ project.description }}
          </p>
          <SkillTags :items="project.tags" />
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from '@/components/SectionContainer.vue'
import SkillTags from '@/components/SkillTags.vue'

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
