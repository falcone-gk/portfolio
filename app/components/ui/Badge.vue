<template>
  <div
    class="flex text-black items-center gap-1 w-fit rounded-xl px-2 py-0.5 shadow-[0_0_0_2px] shadow-primary-600 dark:text-white dark:shadow-primary-400 bg-primary-500 dark:bg-primary-600"
  >
    <div v-if="props.icon" class="flex items-center w-4 h-4">
      <UIcon :name="props.icon" />
    </div>
    <div>
      <span class="text-sm">{{ props.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon?: string;
  label: string;
}>();
</script>
