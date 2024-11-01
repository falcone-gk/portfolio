<template>
  <div class="grid grid-cols-1 gap-4">
    <UCard
      v-for="index in props.total"
      :key="`card-${index}`"
      :ui="{
        base: 'w-full',
      }"
    >
      <template #header>
        <USkeleton class="h-4 w-[250px]" />
      </template>
      <div class="flex flex-col gap-2">
        <USkeleton class="h-4 w-2/3 md:w-[600px]" />
        <USkeleton class="h-4 w-1/3 md:w-[400px]" />
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  total: {
    type: Number,
    default: 3,
  },
});
</script>
