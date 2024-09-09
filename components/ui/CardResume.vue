<template>
  <UCard
    :ui="{
      header: {
        base: 'h-48',
        padding: '',
      },
    }"
  >
    <template #header>
      <img
        class="w-full h-full object-cover rounded-t-lg"
        :src="props.imageUrl"
        :alt="props.title"
      />
    </template>
    <div>
      <Typography tag="h2" variant="h3" color="gray">
        {{ props.title }}
      </Typography>
    </div>
    <div>
      <p>{{ props.description }}</p>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  imageUrl: string;
}>();
</script>
