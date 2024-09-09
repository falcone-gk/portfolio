<template>
  <div
    class="grid gap-4 mt-10 auto-cols-auto grid-cols-[repeat(auto-fill,minmax(15rem,1fr))]"
  >
    <UiCardResume
      v-for="(project, index) in projects"
      v-bind="project"
      :key="`proj-${index}`"
    />
  </div>
</template>

<script setup lang="ts">
const exampleImage =
  "https://scontent.flim16-1.fna.fbcdn.net/v/t39.30808-6/288962705_1180945079386009_4514880790473574787_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHnECUb1_5AjYu082xmcB-gPt_AnOywL54-38Cc7LAvnkwTtAvzC1DxxBT_JkuYM__YkdMIIsYML2kOZvxsx4hm&_nc_ohc=QWtFKqyPJSoQ7kNvgFoGSw0&_nc_ht=scontent.flim16-1.fna&oh=00_AYAmkvi9p6QoQ3LwlgZx0EXRb4FAEerSFeQlUvcwbQrnIg&oe=66E4F378";

const projects = [
  {
    title: "Edukar Website",
    description:
      "Created a responsive landing page with a forum for students participation in solving math problems.",
    imageUrl: exampleImage,
  },
];
</script>
