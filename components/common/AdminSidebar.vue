<template>
  <UCard
    :ui="{
      base: 'hidden md:flex flex-col min-w-[300px]',
      rounded: '',
      background: 'bg-white dark:bg-gray-950',
      footer: { base: 'mt-auto' },
    }"
  >
    <UVerticalNavigation
      class="min-w-[250px]"
      :links="links"
      :ui="{
        active: 'before:bg-primary-300 dark:before:bg-primary-600',
      }"
    >
      <template #badge="{ link }">
        <div v-if="link.input" class="flex items-center ml-auto">
          <UToggle v-model="selected" @click="toggleColorMode" />
        </div>
      </template>
    </UVerticalNavigation>

    <template #footer>
      <UButton
        class="w-full"
        icon="i-heroicons-arrow-right-end-on-rectangle-solid"
        label="Logout"
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

const darkMode = [
  { label: "Dark mode", icon: "i-heroicons-moon-solid", input: true },
];

const links = [adminLinks, publicLinks, darkMode];

const colorMode = useColorMode();
const selected = ref<boolean>(colorMode.preference === "dark");

const toggleColorMode = () => {
  const colorSwitcher = {
    light: "dark",
    dark: "light",
  };
  colorMode.preference = colorSwitcher[colorMode.value as "light" | "dark"];
};

const { execute: logout } = useFetch("/api/auth/logout", { method: "POST" });
const onLogout = async () => {
  await logout();
  navigateTo("/");
};
</script>
