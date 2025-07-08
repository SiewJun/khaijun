<template>
  <!-- Desktop navigation (md and above) -->
  <div class="fixed top-4 left-0 right-0 z-40 hidden md:flex justify-center">
    <nav class="backdrop-blur-md bg-background/80 border rounded-full shadow-lg px-6 py-3 mx-auto">
      <NavigationMenu>
        <NavigationMenuList class="font-medium">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <RouterLink
                to="/"
                class="px-4 py-2 rounded-full transition-colors hover:bg-accent hover:text-accent-foreground"
                :class="{ 'bg-primary text-primary-foreground': $route.name === 'home' }"
              >
                Home
              </RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <RouterLink
                to="/career"
                class="px-4 py-2 rounded-full transition-colors hover:bg-accent hover:text-accent-foreground"
                :class="{ 'bg-primary text-primary-foreground': $route.name === 'career' }"
              >
                Career
              </RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <RouterLink
                to="/projects"
                class="px-4 py-2 rounded-full transition-colors hover:bg-accent hover:text-accent-foreground"
                :class="{ 'bg-primary text-primary-foreground': $route.name === 'projects' }"
              >
                Projects
              </RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <RouterLink
                to="/contact"
                class="px-4 py-2 rounded-full transition-colors hover:bg-accent hover:text-accent-foreground"
                :class="{ 'bg-primary text-primary-foreground': $route.name === 'contact' }"
              >
                Contact
              </RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  </div>

  <!-- Mobile navigation (below md) -->
  <div class="md:hidden fixed bottom-4 left-0 right-0 z-50 flex justify-center">
    <nav
      class="backdrop-blur-md bg-background/80 border rounded-full shadow-lg px-6 py-3 mx-4 w-full max-w-md"
    >
      <div class="flex items-center justify-between">
        <RouterLink
          to="/"
          class="flex flex-col items-center gap-1 px-3 py-2 rounded-full transition-colors"
          :class="{
            'text-primary': $route.name === 'home',
            'text-muted-foreground': $route.name !== 'home',
          }"
        >
          <Home class="w-5 h-5" />
          <span class="text-xs font-medium">Home</span>
        </RouterLink>

        <RouterLink
          to="/career"
          class="flex flex-col items-center gap-1 px-3 py-2 rounded-full transition-colors"
          :class="{
            'text-primary': $route.name === 'career',
            'text-muted-foreground': $route.name !== 'career',
          }"
        >
          <GraduationCap class="w-5 h-5" />
          <span class="text-xs font-medium">Career</span>
        </RouterLink>

        <RouterLink
          to="/projects"
          class="flex flex-col items-center gap-1 px-3 py-2 rounded-full transition-colors"
          :class="{
            'text-primary': $route.name === 'projects',
            'text-muted-foreground': $route.name !== 'projects',
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 10c-4.418 0-8-1.79-8-4V6a2 2 0 012-2h12a2 2 0 012 2v8c0 2.21-3.582 4-8 4z"
            />
          </svg>
          <span class="text-xs font-medium">Projects</span>
        </RouterLink>

        <RouterLink
          to="/contact"
          class="flex flex-col items-center gap-1 px-3 py-2 rounded-full transition-colors"
          :class="{
            'text-primary': $route.name === 'contact',
            'text-muted-foreground': $route.name !== 'contact',
          }"
        >
          <Mail class="w-5 h-5" />
          <span class="text-xs font-medium">Contact</span>
        </RouterLink>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Home, GraduationCap, Mail } from 'lucide-vue-next'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
</script>
