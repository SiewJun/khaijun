<template>
  <SectionContainer
    title="Career & Education"
    subtitle="My professional journey and educational background"
  >
    <!-- Work Experience -->
    <div class="mb-16">
      <h2 class="text-responsive-subheading text-foreground mb-8">Work Experience</h2>

      <UnifiedCard
        title="Frontend Developer Intern"
        subtitle="AI Assistant Project & Employee Trust Fund Mobile App"
        badge="Internship Experience • Hybrid"
        description="Independently developed the frontend for an AI assistant integrated into a greenfield Employee Trust Fund mobile application. Collaborated closely with Business Analysts, Project Managers, and Backend Engineers to translate complex requirements into intuitive user interfaces."
        :tags="[
          'Frontend Development',
          'AI Integration',
          'Mobile Development',
          'Speech-to-Text',
          'Text-to-Speech',
          'Inbox Features',
        ]"
      >
        <ul class="space-y-3 text-responsive-body text-subtle">
          <li class="flex items-start gap-3">
            <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span
              >Implemented core AI assistant features including speech-to-text conversion,
              text-to-speech synthesis, and idle timeout mechanisms</span
            >
          </li>
          <li class="flex items-start gap-3">
            <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span
              >Integrated Inbox features such as replying to messages and notifications, enhancing
              the mobile app experience</span
            >
          </li>
          <li class="flex items-start gap-3">
            <span class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span
              >Collaborated with cross-functional teams to deliver high-quality user
              interfaces</span
            >
          </li>
        </ul>
      </UnifiedCard>
    </div>

    <!-- Technical Skills -->
    <div class="mb-16">
      <h2 class="text-responsive-subheading text-foreground mb-8">Technical Skills</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UnifiedCard
          title="Frontend Development"
          :tags="[
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'Vue.js',
            'React.js',
            'Tailwind CSS',
            'Bootstrap',
            'Ionic',
            'Capacitor',
            'GSAP',
            'Framer Motion',
          ]"
        />

        <UnifiedCard
          title="Backend Development"
          :tags="['Node.js', 'Express.js', 'Laravel', 'PHP', 'PostgreSQL', 'Firebase', 'Sequelize']"
        />

        <UnifiedCard
          title="Programming Languages"
          :tags="['JavaScript', 'TypeScript', 'C++', 'Java', 'Python', 'Kotlin', 'PHP']"
        />

        <UnifiedCard
          title="APIs & Integrations"
          :tags="[
            'Google Maps API',
            'Stripe API',
            'CoinGecko API',
            'Nodemailer',
            'Socket.io',
            'Swagger',
          ]"
        />

        <UnifiedCard title="Tools & Technologies" :tags="['Git', 'XAMPP', 'Vite', 'Webpack']" />

        <UnifiedCard title="Languages" :tags="['English', 'Malay', 'Mandarin', 'Cantonese']" />
      </div>
    </div>

    <!-- Education -->
    <div>
      <h2 class="text-responsive-subheading text-foreground mb-8">Education</h2>

      <div class="space-y-6">
        <UnifiedCard
          title="Bachelor of Computer Science (Honours) in Software Engineering"
          subtitle="Universiti Malaysia Sabah (UMS)"
          badge="Expected Graduation: End of 2025 • CGPA: 3.52"
          description="Currently undertaking a 6-month internship from March-September 2025 to gain practical experience and contribute to impactful software projects. Actively seeking full-time positions, also considering Frontend roles."
        />

        <UnifiedCard
          title="Sijil Tinggi Persekolahan Malaysia (STPM)"
          subtitle="SMK Bandar Tun Hussein Onn 2"
          badge="Examination Year: 2020 • CGPA: 3.17"
        />

        <UnifiedCard
          title="Sijil Pelajaran Malaysia (SPM)"
          subtitle="SMK Bandar Tun Hussein Onn 2"
          badge="Completed in 2018 • 7As and 2Bs"
        />
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from '@/components/SectionContainer.vue'
import UnifiedCard from '@/components/UnifiedCard.vue'
</script>
