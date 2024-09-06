<template>
  <div
    class="flex flex-col justify-center min-h-[calc(100vh-var(--header-height))]"
  >
    <section :id="props.id">
      <Typography
        tag="h2"
        variant="bigger"
        :class="{ 'text-center': props.isCenter }"
      >
        {{ props.title }}
      </Typography>
      <div>
        <slot />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  isCenter: {
    type: Boolean,
    default: false,
  },
});
</script>
