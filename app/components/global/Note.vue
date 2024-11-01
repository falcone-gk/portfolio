<script setup lang="ts">
const props = defineProps({
  type: {
    type: String as PropType<"info" | "warning">,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const notesData = {
  info: {
    icon: "i-heroicons-light-bulb-solid",
    color: "blue",
    title: "Info",
  },
  warning: {
    icon: "i-heroicons-exclamation-triangle-solid",
    color: "yellow",
    title: "Warning",
  },
};
const note = computed(() => {
  return notesData[props.type];
});
</script>

<template>
  <UAlert
    class="not-prose"
    variant="subtle"
    :color="note.color"
    :icon="note.icon"
    :title="note.title"
    :description="props.description"
    :ui="{
      variant: {
        subtle: 'bg-{color}-50 text-gray-900 dark:text-white',
      },
    }"
  />
</template>
