<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-12">
      <h1 class="text-4xl font-bold text-foreground mb-4">Education & Career</h1>
      <p class="text-lg text-muted-foreground">
        My educational background, career progression, and work experience
      </p>
    </div>

    <div class="space-y-8">
      <!-- Work Experience Section (detailed, from WorkView.vue) -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-foreground mb-8">Work Experience</h2>
        <div class="bg-card rounded-lg border p-6 shadow-sm">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 class="text-xl font-semibold text-foreground">Frontend Developer Intern</h3>
              <p class="text-primary font-medium">AI Assistant Project</p>
            </div>
            <div class="text-sm text-muted-foreground md:text-right">
              <p>Internship Experience</p>
              <p>Hybrid</p>
            </div>
          </div>
          <ul class="space-y-2 text-muted-foreground">
            <li>
              • Independently developed the frontend for an AI assistant integrated into a
              greenfield Employee Trust Fund's mobile application
            </li>
            <li>
              • Collaborated closely with Business Analysts, Project Managers, and Backend Engineers
              to translate complex requirements into intuitive user interfaces and functionalities
            </li>
            <li>
              • Implemented core AI assistant features, including speech-to-text conversion,
              text-to-speech synthesis, and idle timeout mechanisms
            </li>
            <li>
              • Worked on integrating Inbox features for the app like replying and enhancing native
              experience for the mobile app
            </li>
          </ul>
          <div class="flex flex-wrap gap-2 mt-4">
            <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >Frontend Development</span
            >
            <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >AI Integration</span
            >
            <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >Mobile Development</span
            >
            <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >Speech-to-Text</span
            >
          </div>
        </div>
      </div>

      <!-- Skills Section (now second) -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-foreground mb-8">Technical Skills</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-card rounded-lg border p-6 shadow-sm">
            <h3 class="text-lg font-semibold text-foreground mb-4">Frontend</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">HTML</span>
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">CSS</span>
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >JavaScript</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Vue.js</span>
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >React.js</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >TypeScript</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >Capacitor</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Ionic</span>
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >Bootstrap</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >Tailwind CSS</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">ShadCN</span>
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">GSAP</span>
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >Framer Motion</span
              >
            </div>
          </div>

          <div class="bg-card rounded-lg border p-6 shadow-sm">
            <h3 class="text-lg font-semibold text-foreground mb-4">Backend</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Node.js</span>
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >Express.js</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Laravel</span>
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >PostgreSQL</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >Firebase</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >Sequelize</span
              >
            </div>
          </div>

          <div class="bg-card rounded-lg border p-6 shadow-sm">
            <h3 class="text-lg font-semibold text-foreground mb-4">APIs & Tools</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >Google Maps API</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >Stripe API</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >CoinGecko API</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Git</span>
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >Nodemailer</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >Socket.io</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Swagger</span>
            </div>
          </div>

          <div class="bg-card rounded-lg border p-6 shadow-sm">
            <h3 class="text-lg font-semibold text-foreground mb-4">Languages</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >JavaScript</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">C++</span>
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Java</span>
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >Python (Basic)</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Kotlin</span>
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">PHP</span>
            </div>
          </div>

          <div class="bg-card rounded-lg border p-6 shadow-sm">
            <h3 class="text-lg font-semibold text-foreground mb-4">Other</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">XAMPP</span>
            </div>
          </div>

          <div class="bg-card rounded-lg border p-6 shadow-sm">
            <h3 class="text-lg font-semibold text-foreground mb-4">Spoken Languages</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">English</span>
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Malay</span>
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >Mandarin</span
              >
              <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >Cantonese</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Education Section (now last) -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-foreground mb-8">Education</h2>

        <div class="space-y-6">
          <div class="bg-card rounded-lg border p-6 shadow-sm">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 class="text-xl font-semibold text-foreground">
                  Bachelor of Computer Science (Honours) in Software Engineering
                </h3>
                <p class="text-primary font-medium">Universiti Malaysia Sabah (UMS)</p>
              </div>
              <div class="text-sm text-muted-foreground md:text-right">
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
                <h3 class="text-xl font-semibold text-foreground">
                  Sijil Tinggi Persekolahan Malaysia (STPM)
                </h3>
                <p class="text-primary font-medium">SMK Bandar Tun Hussein Onn 2</p>
              </div>
              <div class="text-sm text-muted-foreground md:text-right">
                <p>Examination Year: 2020</p>
                <p>Results Released: 2021 | CGPA: 3.17</p>
              </div>
            </div>
          </div>

          <div class="bg-card rounded-lg border p-6 shadow-sm">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 class="text-xl font-semibold text-foreground">
                  Sijil Pelajaran Malaysia (SPM)
                </h3>
                <p class="text-primary font-medium">SMK Bandar Tun Hussein Onn 2</p>
              </div>
              <div class="text-sm text-muted-foreground md:text-right">
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
// Add any reactive data or methods here if needed
</script>
