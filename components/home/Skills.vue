<template>
  <div class="space-y-12">
    <p>I have experience with the following technologies and tools</p>
    <div class="space-y-10">
      <div>
        <Typography class="mb-4" tag="h3" variant="h3" color="gray">
          Backend Developer
        </Typography>
        <div class="flex gap-3 flex-wrap">
          <div
            v-for="(tool, index) in skills?.backend"
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
            v-for="(tool, index) in skills?.frontend"
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
          <div v-for="(tool, index) in skills?.extra" :key="`extra-${index}`">
            <UiBadge :icon="tool.icon" :label="tool.name" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: skills } = await useFetch("/skills");
</script>
