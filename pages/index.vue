<template>
  <div class="space-y-36">
    <HomeSection title="Skills" id="skills">
      <HomeSkills />
    </HomeSection>

    <HomeSection title="Experience" id="experience" :is-center="true">
      <HomeExperience />
    </HomeSection>

    <HomeSection title="Projects" id="projects" :is-center="true">
      <HomeProjects />
    </HomeSection>

    <HomeSection title="Contact" id="contact" :is-center="true">
      <HomeContact />
    </HomeSection>
  </div>
</template>
