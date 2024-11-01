<template>
  <div class="flex gap-24">
    <div class="space-y-12">
      <p>I have experience with the following technologies and tools</p>
      <div class="space-y-10">
        <div>
          <Typography
            class="mb-4"
            tag="h3"
            variant="h3"
            color="gray"
          >
            Backend Developer
          </Typography>
          <div class="flex gap-3 flex-wrap">
            <div
              v-for="(tool, index) in skills.backend"
              :key="`backend-${index}`"
            >
              <UiBadge :icon="tool.icon" :label="tool.name" />
            </div>
          </div>
        </div>

        <div>
          <Typography
            class="mb-4"
            tag="h3"
            variant="h3"
            color="gray"
          >
            Frontend Developer
          </Typography>
          <div class="flex gap-3 flex-wrap">
            <div
              v-for="(tool, index) in skills.frontend"
              :key="`frontend-${index}`"
            >
              <UiBadge :icon="tool.icon" :label="tool.name" />
            </div>
          </div>
        </div>

        <div>
          <Typography
            class="mb-4"
            tag="h3"
            variant="h3"
            color="gray"
          >
            Extra skills
          </Typography>
          <div class="flex gap-3 flex-wrap">
            <div v-for="(tool, index) in skills.extra" :key="`extra-${index}`">
              <UiBadge :icon="tool.icon" :label="tool.name" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block">
      <img
        class="computer h-[400px] w-auto"
        src="/images/tech_computer.svg"
        alt="computer"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = {
  backend: [
    { name: "Python", icon: "i-logos-python" },
    { name: "Django", icon: "i-logos-django-icon" },
    { name: "Postgresql", icon: "i-logos-postgresql" },
    { name: "Redis", icon: "i-logos-redis" },
  ],
  frontend: [
    { name: "Vue 3", icon: "i-logos-vue" },
    { name: "Nuxt 3", icon: "i-logos-nuxt-icon" },
    { name: "Tailwind", icon: "i-logos-tailwindcss-icon" },
    { name: "HTML", icon: "i-logos-html-5" },
    { name: "JavaScript", icon: "i-logos-javascript" },
    { name: "CSS", icon: "i-logos-css-3" },
    { name: "Typescript", icon: "i-logos-typescript-icon" },
  ],
  extra: [
    { name: "Docker", icon: "i-logos-docker-icon" },
    { name: "Linux", icon: "i-logos-linux-tux" },
    { name: "Git", icon: "i-logos-git-icon" },
    { name: "Nginx", icon: "i-logos-nginx" },
  ],
};
</script>

<style scoped>
.computer {
  mask-image: radial-gradient(250px at center, black, transparent);
}
</style>
