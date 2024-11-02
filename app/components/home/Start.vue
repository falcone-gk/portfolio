<template>
  <div class="flex flex-col-reverse gap-12 items-center md:flex-row">
    <div>
      <div>
        <Typography
          class="lg:leading-[140px]"
          tag="h1"
          variant="biggest"
          color="gray"
        >
          Hi! I am <span class="text-primary-500">Enzo</span> and I am a
          <span class="text-primary-500">Web Developer</span>
        </Typography>
      </div>
      <div class="space-y-12 mt-4">
        <Typography color="gray" variant="big">
          Full Stack Web Developer with a strong commitment to my work,
          achieving high quality projects, to the expectations of my client.
        </Typography>
        <div class="flex gap-8 items-center">
          <UButton
            label="Download CV"
            size="xl"
            icon="i-heroicons-document-text-20-solid"
            trailing
            @click="downloadCV"
          />
          <UButton
            size="xl"
            label="Contact"
            color="blue"
            variant="outline"
            icon="i-logos-linkedin-icon"
            trailing
            to="https://www.linkedin.com/in/enzo-falcon-50b638208/"
            target="_blank"
          />
        </div>
      </div>
    </div>
    <div class="max-w-[350px]">
      <img src="/images/profile.jpg" alt="profile">
    </div>
  </div>
</template>

<script setup lang="ts">
const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/files/cv_enzo_falcon.pdf";
  link.download = "CV_Enzo_Falcon.pdf";
  link.target = "_blank";
  link.click();
};
</script>

<style scoped>
img {
  mask-image: linear-gradient(black 80%, transparent);
}
</style>
