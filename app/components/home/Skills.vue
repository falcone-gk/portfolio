<template>
  <div class="text-center flex gap-24">
    <div class="mx-auto space-y-12">
      <Typography variant="big" color="gray">
        I have experience with the following technologies and tools:
      </Typography>
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
          <div class="flex justify-center gap-3 flex-wrap">
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
          <div class="flex justify-center gap-3 flex-wrap">
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
          <div class="flex justify-center gap-3 flex-wrap">
            <div v-for="(tool, index) in skills.extra" :key="`extra-${index}`">
              <UiBadge :icon="tool.icon" :label="tool.name" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="hidden lg:block">
      <img
        class="computer h-[400px] w-auto"
        src="/images/tech_computer.svg"
        alt="computer"
      >
    </div> -->
  </div>
</template>

<script setup lang="ts">
const skills = {
  backend: [
    { name: "Python", icon: "i-simple-icons-python" },
    { name: "Django", icon: "i-simple-icons-django" },
    { name: "Postgresql", icon: "i-simple-icons-postgresql" },
    { name: "Redis", icon: "i-simple-icons-redis" }, // TODO: Add redis icon
  ],
  frontend: [
    { name: "Vue 3", icon: "i-simple-icons-vuedotjs" },
    { name: "Nuxt 3", icon: "i-simple-icons-nuxtdotjs" },
    { name: "Tailwind", icon: "i-simple-icons-nuxtdotjs" },
    { name: "HTML", icon: "i-simple-icons-html5" },
    { name: "JavaScript", icon: "i-simple-icons-javascript" },
    { name: "CSS", icon: "i-simple-icons-css3" },
    { name: "Typescript", icon: "i-simple-icons-typescript" },
  ],
  extra: [
    { name: "Docker", icon: "i-simple-icons-docker" },
    { name: "Linux", icon: "i-simple-icons-linux" },
    { name: "Git", icon: "i-simple-icons-git" },
    { name: "Nginx", icon: "i-simple-icons-nginx" },
  ],
};
</script>

<style scoped>
.computer {
  mask-image: radial-gradient(250px at center, black, transparent);
}
</style>
