<template>
  <UCard
    :ui="{
      base: 'flex flex-col min-w-[300px]',
      rounded: '',
      background: 'bg-white dark:bg-gray-950',
      footer: { base: 'mt-auto' },
    }"
  >
    <UVerticalNavigation
      class="min-w-[250px]"
      :links="links"
      :ui="{
        active: 'before:bg-primary-100 dark:before:bg-primary-600',
      }"
    />

    <template #footer>
      <UButton
        class="w-full"
        icon="i-heroicons-arrow-right-end-on-rectangle-solid"
        label="Cerrar sesión"
        variant="outline"
        @click="onLogout"
      />
    </template>
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

const { execute: logout } = useFetch("/api/auth/logout", { method: "POST" });
const onLogout = async () => {
  await logout();
  navigateTo("/");
};
</script>
