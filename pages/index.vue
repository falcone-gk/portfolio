<template>
  <div class="space-y-36">
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

    <HomeSection title="Contact" id="contact" is-center>
      <HomeContact />
    </HomeSection>
  </div>
</template>
