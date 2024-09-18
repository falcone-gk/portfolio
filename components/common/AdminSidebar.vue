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
const adminLinks = [
  {
    label: "Dashboard",
    icon: "i-heroicons-presentation-chart-bar-solid",
    to: "/admin",
    exact: true,
  },
  { label: "Posts", icon: "i-heroicons-pencil-solid", to: "/admin/posts" },
  { label: "Tags", icon: "i-heroicons-tag-solid", to: "/admin/tags" },
];

const publicLinks = [
  { label: "Home", icon: "i-heroicons-home-solid", to: "/" },
  { label: "Blog", icon: "i-heroicons-book-open-solid", to: "/blog" },
];

const links = [adminLinks, publicLinks];
</script>
