<template>
  <div class="max-w-4xl mx-auto">
    <HeaderContainer
      title="Education & Career"
      subtitle="My work experience and educational background"
    />
    <div class="space-y-8">
      <!-- Work Experience Section (detailed, from WorkView.vue) -->
      <div class="mb-16">
        <h2 class="text-responsive-heading font-bold text-foreground mb-8">Work Experience</h2>
        <div class="bg-card rounded-lg border p-6 shadow-sm">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 class="text-responsive-subheading font-semibold text-foreground">
                Frontend Developer Intern
              </h3>
              <p class="text-primary font-medium">
                AI Assistant Project & Employee Trust Fund Mobile App
              </p>
            </div>
            <div class="text-responsive-small text-muted-foreground md:text-right">
              <p>Internship Experience</p>
              <p>Hybrid</p>
            </div>
          </div>
          <ul class="space-y-2 text-muted-foreground">
            <li>
              • Independently developed the frontend for an AI assistant integrated into a
              greenfield Employee Trust Fund mobile application.
            </li>
            <li>
              • Collaborated closely with Business Analysts, Project Managers, and Backend Engineers
              to translate complex requirements into intuitive user interfaces and functionalities.
            </li>
            <li>
              • Implemented core AI assistant features, including speech-to-text conversion,
              text-to-speech synthesis, and idle timeout mechanisms.
            </li>
            <li>
              • Integrated Inbox features such as replying to messages and notifications,
              significantly enhancing the native experience for the mobile app.
            </li>
          </ul>
          <div class="flex flex-wrap gap-2 mt-4">
            <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
              >Frontend Development</span
            >
            <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
              >AI Integration</span
            >
            <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
              >Mobile Development</span
            >
            <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
              >Inbox Features</span
            >
            <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
              >Speech-to-Text</span
            >
            <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
              >Native Experience</span
            >
          </div>
        </div>
      </div>

      <!-- Skills Section (now second) -->
      <div class="mb-16">
        <h2 class="text-responsive-heading font-bold text-foreground mb-8">Technical Skills</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-card rounded-lg border p-6 shadow-sm">
            <h3 class="text-responsive-subheading font-semibold text-foreground mb-4">Frontend</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >HTML</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >CSS</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >JavaScript</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Vue.js</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >React.js</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >TypeScript</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Capacitor</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Ionic</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Bootstrap</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Tailwind CSS</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >ShadCN</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >GSAP</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Framer Motion</span
              >
            </div>
          </div>

          <div class="bg-card rounded-lg border p-6 shadow-sm">
            <h3 class="text-responsive-subheading font-semibold text-foreground mb-4">Backend</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Node.js</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Express.js</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Laravel</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >PostgreSQL</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Firebase</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Sequelize</span
              >
            </div>
          </div>

          <div class="bg-card rounded-lg border p-6 shadow-sm">
            <h3 class="text-responsive-subheading font-semibold text-foreground mb-4">
              APIs & Tools
            </h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Google Maps API</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Stripe API</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >CoinGecko API</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Git</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Nodemailer</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Socket.io</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Swagger</span
              >
            </div>
          </div>

          <div class="bg-card rounded-lg border p-6 shadow-sm">
            <h3 class="text-responsive-subheading font-semibold text-foreground mb-4">Languages</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >JavaScript</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >C++</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Java</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Python (Basic)</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Kotlin</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >PHP</span
              >
            </div>
          </div>

          <div class="bg-card rounded-lg border p-6 shadow-sm">
            <h3 class="text-responsive-subheading font-semibold text-foreground mb-4">Other</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >XAMPP</span
              >
            </div>
          </div>

          <div class="bg-card rounded-lg border p-6 shadow-sm">
            <h3 class="text-responsive-subheading font-semibold text-foreground mb-4">
              Spoken Languages
            </h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >English</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Malay</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Mandarin</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-responsive-small"
                >Cantonese</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Education Section (now last) -->
      <div class="mb-16">
        <h2 class="text-responsive-heading font-bold text-foreground mb-8">Education</h2>

        <div class="space-y-6">
          <div class="bg-card rounded-lg border p-6 shadow-sm">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 class="text-responsive-subheading font-semibold text-foreground">
                  Bachelor of Computer Science (Honours) in Software Engineering
                </h3>
                <p class="text-primary font-medium">Universiti Malaysia Sabah (UMS)</p>
              </div>
              <div class="text-responsive-small text-muted-foreground md:text-right">
                <p>Expected Graduation: End of 2025</p>
                <p>CGPA: 3.52</p>
              </div>
            </div>
            <p class="text-muted-foreground mb-4">
              Currently undertaking a 6-month internship from March-September 2025 to gain practical
              experience and contribute to impactful software projects. Actively seeking full-time
              positions, also considering Frontend roles.
            </p>
          </div>

          <div class="bg-card rounded-lg border p-6 shadow-sm">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 class="text-responsive-subheading font-semibold text-foreground">
                  Sijil Tinggi Persekolahan Malaysia (STPM)
                </h3>
                <p class="text-primary font-medium">SMK Bandar Tun Hussein Onn 2</p>
              </div>
              <div class="text-responsive-small text-muted-foreground md:text-right">
                <p>Examination Year: 2020</p>
                <p>Results Released: 2021 | CGPA: 3.17</p>
              </div>
            </div>
          </div>

          <div class="bg-card rounded-lg border p-6 shadow-sm">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 class="text-responsive-subheading font-semibold text-foreground">
                  Sijil Pelajaran Malaysia (SPM)
                </h3>
                <p class="text-primary font-medium">SMK Bandar Tun Hussein Onn 2</p>
              </div>
              <div class="text-responsive-small text-muted-foreground md:text-right">
                <p>Completed in 2018 with 7As and 2Bs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderContainer from '@/components/HeaderContainer.vue'
</script>
