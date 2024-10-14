<template>
  <div>
    <HomeSection id="hero" class="mt-12 md:mt-0">
      <HomeStart />
    </HomeSection>

    <HomeSection
      id="about"
      title="About Me"
      transition
      class="flex flex-col mx-auto max-w-[900px]"
    >
      <HomeAbout />
    </HomeSection>

    <HomeSection id="skills" title="Skills" transition>
      <HomeSkills />
    </HomeSection>

    <HomeSection id="experience" title="Experience" is-center transition>
      <HomeExperience />
    </HomeSection>

    <HomeSection id="projects" title="Projects" transition is-center>
      <HomeProjects />
    </HomeSection>

    <HomeSection
      id="contact"
      class="flex mx-auto max-w-[700px]"
      title="Contact"
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

defineShortcuts({
  ctrl_shift_k: {
    handler: () => navigateTo("/admin"),
  },
});
</script>
