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
          <UButton label="Download CV" size="xl" />
          <UButton
            size="xl"
            label="Contact"
            variant="outline"
            icon="i-heroicons-envelope-solid"
            :to="{ path: '/', hash: '#contact' }"
          />
        </div>
      </div>
    </div>
    <div class="max-w-[350px]">
      <img src="/images/profile.jpg" alt="profile" />
    </div>
  </div>
</template>

<style scoped>
img {
  mask-image: linear-gradient(black 80%, transparent);
}
</style>
