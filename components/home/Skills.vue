<template>
  <div class="space-y-12">
    <p>I have experience with the following technologies and tools</p>
    <div class="space-y-10">
      <div>
        <Typography class="mb-4" tag="h3" variant="h3" color="gray">
          Backend Developer
        </Typography>
        <div class="flex gap-3 flex-wrap">
          <div v-for="(tool, index) in backendTools" :key="`backend-${index}`">
            <UiBadge :icon="tool.icon" :label="tool.name" />
          </div>
        </div>
      </div>

      <div>
        <Typography class="mb-4" tag="h3" variant="h3" color="gray">
          Frontend Developer
        </Typography>
        <div class="flex gap-3 flex-wrap">
          <div
            v-for="(tool, index) in frontendTools"
            :key="`frontend-${index}`"
          >
            <UiBadge :icon="tool.icon" :label="tool.name" />
          </div>
        </div>
      </div>

      <div>
        <Typography class="mb-4" tag="h3" variant="h3" color="gray">
          Extra skills
        </Typography>
        <div class="flex gap-3 flex-wrap">
          <div v-for="(tool, index) in extraTools" :key="`extra-${index}`">
            <UiBadge :icon="tool.icon" :label="tool.name" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const backendTools = [
  { name: "Python", icon: "i-logos-python" },
  { name: "Django", icon: "i-logos-django-icon" },
  { name: "Postgresql", icon: "i-logos-postgresql" },
  { name: "Redis", icon: "i-logos-redis" },
];

const frontendTools = [
  { name: "Vue 3", icon: "i-logos-vue" },
  { name: "Nuxt 3", icon: "i-logos-nuxt-icon" },
  { name: "Tailwind", icon: "i-logos-tailwindcss-icon" },
  { name: "HTML", icon: "i-logos-html-5" },
  { name: "JavaScript", icon: "i-logos-javascript" },
  { name: "CSS", icon: "i-logos-css-3" },
  { name: "Typescript", icon: "i-logos-typescript-icon" },
];

const extraTools = [
  { name: "Docker", icon: "i-logos-docker-icon" },
  { name: "Linux", icon: "i-logos-linux-tux" },
  { name: "Git", icon: "i-logos-git-icon" },
  { name: "Nginx", icon: "i-logos-nginx" },
];
</script>
