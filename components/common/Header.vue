<template>
  <div
    class="flex items-center bg-primary-50 sticky top-0 z-50 h-[var(--header-height)] border-b-[1px] border-b-gray-200 dark:bg-primary-950 dark:border-b-gray-800"
  >
    <div class="flex justify-between w-full mx-2 my-1">
      <div>
        <p>Logo</p>
      </div>
      <div class="flex md:gap-8">
        <nav class="hidden md:flex items-center">
          <ul class="space-x-8">
            <li class="inline-flex" v-for="link in navLinks">
              <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <div>
          <UButton
            class="md:hidden"
            icon="i-heroicons-bars-3"
            @click="isOpen = !isOpen"
            color="gray"
            variant="ghost"
          />
          <ColorScheme>
            <UButton
              class="hidden md:flex"
              :icon="iconColorMode"
              @click="toggleColorMode"
              color="gray"
              variant="ghost"
            />
          </ColorScheme>
        </div>
      </div>
      <CommonMobileNav :links="links" v-model:open="isOpen" />
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const isOpen = ref(false);

const toggleColorMode = () => {
  const colorSwitcher = {
    light: "dark",
    dark: "light",
  };
  colorMode.preference = colorSwitcher[colorMode.value as "light" | "dark"];
};

const iconColorMode = computed(() => {
  return colorMode.value === "dark"
    ? "i-heroicons-sun-solid"
    : "i-heroicons-moon-solid";
});

const navLinks = [
  { label: "Home", section: "home", to: "/" },
  {
    label: "Skills",
    section: "skills",
    to: { path: "/", hash: "#skills" },
  },
  // { label: "About", section: "about", to: "/" },
  {
    label: "Experience",
    section: "experience",
    to: { path: "/", hash: "#experience" },
  },
  {
    label: "Projects",
    section: "projects",
    to: { path: "/", hash: "#projects" },
  },
  { label: "Contact", section: "contact", to: { path: "/", hash: "#contact" } },
];

const links = [
  navLinks,
  [{ label: "Dark mode", icon: "i-heroicons-moon-solid", input: true }],
];
</script>
