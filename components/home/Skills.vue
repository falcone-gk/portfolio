<template>
  <div class="flex gap-24">
    <div class="space-y-12">
      <p>I have experience with the following technologies and tools</p>
      <div class="space-y-10">
        <div>
          <Typography class="mb-4" tag="h3" variant="h3" color="gray">
            Backend Developer
          </Typography>
          <div class="flex gap-3 flex-wrap">
            <div
              v-for="(tool, index) in skills.backend"
              :key="`backend-${index}`"
            >
              <UiBadge :icon="tool.icon" :label="tool.name" />
            </div>
          </div>
        </div>

        <div>
          <Typography class="mb-4" tag="h3" variant="h3" color="gray">
            Frontend Developer
          </Typography>
          <div class="flex gap-3 flex-wrap">
            <div
              v-for="(tool, index) in skills.frontend"
              :key="`frontend-${index}`"
            >
              <UiBadge :icon="tool.icon" :label="tool.name" />
            </div>
          </div>
        </div>

        <div>
          <Typography class="mb-4" tag="h3" variant="h3" color="gray">
            Extra skills
          </Typography>
          <div class="flex gap-3 flex-wrap">
            <div v-for="(tool, index) in skills.extra" :key="`extra-${index}`">
              <UiBadge :icon="tool.icon" :label="tool.name" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block">
      <img
        class="computer h-[400px] w-auto"
        src="/images/tech_computer.svg"
        alt="computer"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DevSkills } from "~/types";

const { data } = await useFetch("/skills");
const skills = computed<DevSkills>(() => {
  return (
    data.value || {
      backend: [],
      frontend: [],
      extra: [],
    }
  );
});
</script>

<style scoped>
.computer {
  mask-image: radial-gradient(250px at center, black, transparent);
}
</style>
