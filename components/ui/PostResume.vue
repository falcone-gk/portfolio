<template>
  <UCard :ui="{ rounded: '' }">
    <template #header>
      <Typography tag="h2" variant="h3" color="gray">
        {{ props.title }}
      </Typography>
    </template>
    <div>
      <p>{{ props.description }}</p>
    </div>

    <template #footer>
      <UButton label="Read more" variant="outline" />
    </template>
  </UCard>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: String;
  description: String;
}>();
</script>
