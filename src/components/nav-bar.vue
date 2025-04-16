<template>
  <div class="fixed top-4 left-0 right-0 z-50 flex justify-center">
    <nav class="backdrop-blur-md bg-background/70 border rounded-full shadow-md px-6 py-2 mx-auto">
      <div class="flex items-center justify-between gap-6">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink class="hover:bg-transparent">
                <RouterLink to="/">Home</RouterLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink class="hover:bg-transparent">
                <RouterLink to="/work">Work</RouterLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink class="hover:bg-transparent">
                <RouterLink to="/experience">Experience</RouterLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink>
                <RouterLink to="/contact">Contact</RouterLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div class="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import ThemeToggle from '@/components/theme-toggle.vue'
</script>
