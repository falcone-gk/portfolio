<template>
  <UCard
    :ui="{
      base: 'min-w-[300px]',
      rounded: '',
      background: 'bg-white dark:bg-gray-950',
    }"
  >
    <UVerticalNavigation
      class="min-w-[250px]"
      :links="links"
      :ui="{
        active: 'before:bg-primary-100 dark:before:bg-primary-600',
      }"
    />
  </UCard>
</template>

<script setup lang="ts">
const links = [
  {
    label: "Admin",
    icon: "i-heroicons-wrench-screwdriver-solid",
    to: "/admin",
  },
  { label: "Posts", icon: "i-heroicons-pencil-solid" },
  { label: "Home", icon: "i-heroicons-home-solid", to: "/" },
  { label: "Blog", icon: "i-heroicons-book-open-solid", to: "/blog" },
];
</script>
