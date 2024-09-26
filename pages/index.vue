<template>
  <div>
    <HomeSection class="mt-12 md:mt-0" id="hero">
      <HomeStart />
    </HomeSection>

    <HomeSection
      title="About Me"
      id="about"
      transition
      class="flex flex-col mx-auto max-w-[900px]"
    >
      <HomeAbout />
    </HomeSection>

    <HomeSection title="Skills" id="skills" transition>
      <HomeSkills />
    </HomeSection>

    <HomeSection title="Experience" id="experience" is-center transition>
      <HomeExperience />
    </HomeSection>

    <HomeSection title="Projects" id="projects" transition is-center>
      <HomeProjects />
    </HomeSection>

    <HomeSection
      class="flex mx-auto max-w-[700px]"
      title="Contact"
      id="contact"
      is-center
    >
      <HomeContact />
    </HomeSection>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "FalconeX",
  description:
    "Portfolio website to show my skills, projects, work experience and blog content.",
  ogTitle: "Enzo Falcon",
  ogDescription:
    "Portfolio website to show my skills, projects, work experience and blog content.",
  ogLocale: "es",
});
</script>
