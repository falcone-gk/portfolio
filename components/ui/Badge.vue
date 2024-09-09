<template>
  <div
    class="flex text-white items-center gap-1 w-fit rounded-xl px-2 py-1 shadow-[0_0_0_2px] shadow-primary-200 dark:shadow-primary-400 bg-primary-400 dark:bg-primary-600"
  >
    <div class="flex items-center w-4 h-4">
      <UIcon :name="props.icon" />
    </div>
    <div>
      <span class="text-sm">{{ props.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string;
  label: string;
}>();
</script>
