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
    imageUrl:
      "https://scontent.flim16-1.fna.fbcdn.net/v/t39.30808-6/288962705_1180945079386009_4514880790473574787_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHnECUb1_5AjYu082xmcB-gPt_AnOywL54-38Cc7LAvnkwTtAvzC1DxxBT_JkuYM__YkdMIIsYML2kOZvxsx4hm&_nc_ohc=QWtFKqyPJSoQ7kNvgFoGSw0&_nc_ht=scontent.flim16-1.fna&oh=00_AYAmkvi9p6QoQ3LwlgZx0EXRb4FAEerSFeQlUvcwbQrnIg&oe=66E4F378",
    visitUrl: "https://aedukar.com/",
  },
  {
    title: "MascotAmigos",
    description:
      "Ecommerce demo where I participated with web scraping superpet.pe and implemented the data scraped in the frontend.",
    imageUrl:
      "https://scontent.flim16-1.fna.fbcdn.net/v/t39.30808-6/454314328_122100827054460680_526968905692020925_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_AZHWOd61ssQ7kNvgGKLRow&_nc_ht=scontent.flim16-1.fna&oh=00_AYDa_qkJLOWCY-t5ZsRaWuwOSBzmG2uWcnHmS9qJaYC-9g&oe=66EA579B",
    visitUrl: "https://ecommerce-demo-weld.vercel.app",
    githubUrl: "https://github.com/javierrh2812/ecommerce-demo",
  },
];
</script>
