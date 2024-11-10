<template>
  <div class="mt-10">
    <CommonGrid>
      <UiCardResume
        v-for="(project, index) in projects"
        v-bind="project"
        :key="`proj-${index}`"
      >
        <template #customFooter>
          <div class="flex gap-2 flex-wrap">
            <UButton
              label="Visit"
              :aria-label="`Visit ${project.title}`"
              variant="outline"
              :to="project.visitUrl"
              target="_blank"
            />

            <UButton
              v-if="project.githubUrl"
              label="Repository"
              :aria-label="`Visit ${project.title} Github repository`"
              icon="i-simple-icons-github"
              :to="project.githubUrl"
              target="_blank"
            />
          </div>
        </template>
      </UiCardResume>
    </CommonGrid>
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
  // {
  //   title: "MascotAmigos",
  //   description:
  //     "Ecommerce demo where I participated with web scraping superpet.pe and implemented the data scraped in the frontend.",
  //   imageUrl: "/images/projects/mascotamigo.webp",
  //   visitUrl: "https://ecommerce-demo-weld.vercel.app",
  //   githubUrl: "https://github.com/javierrh2812/ecommerce-demo",
  // },
  {
    title: "Demo Tenant Admin",
    description:
      "Web application that allows you to manage the costs, services and rent of tenants of a house",
    imageUrl: "/images/projects/tenant-admin.webp",
    visitUrl: "https://tenant-admin.vercel.app/login",
    githubUrl: "https://github.com/falcone-gk/tenant-admin",
  },
];
</script>
