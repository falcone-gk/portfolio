<template>
  <div
    class="grid gap-4 mt-10 auto-cols-auto grid-cols-[repeat(auto-fill,minmax(15rem,1fr))]"
  >
    <UiCardResume
      v-for="(project, index) in projects"
      v-bind="project"
      :key="`proj-${index}`"
    >
      <template #customFooter>
        <div class="flex gap-2 flex-wrap">
          <UButton
            label="Visit"
            variant="outline"
            :to="project.visitUrl"
            target="_blank"
          />

          <UButton
            v-if="project.githubUrl"
            label="Repository"
            icon="i-logos-github-icon"
            :to="project.githubUrl"
            target="_blank"
          />
        </div>
      </template>
    </UiCardResume>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "Edukar Website",
    description:
      "Created a responsive landing page with a forum for students participation in solving math problems.",
    imageUrl: "/images/projects/edukar.webp",
    visitUrl: "https://aedukar.com/",
  },
  {
    title: "MascotAmigos",
    description:
      "Ecommerce demo where I participated with web scraping superpet.pe and implemented the data scraped in the frontend.",
    imageUrl: "/images/projects/mascotamigo.webp",
    visitUrl: "https://ecommerce-demo-weld.vercel.app",
    githubUrl: "https://github.com/javierrh2812/ecommerce-demo",
  },
];
</script>
