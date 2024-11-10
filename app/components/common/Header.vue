<template>
  <div
    class="flex items-center bg-background sticky top-0 z-50 h-[var(--header-height)] border-b-[1px] border-b-gray-200 dark:bg-gray-950 dark:border-b-gray-800"
  >
    <div class="flex justify-between w-full mx-2 mt-1">
      <!-- <div class="absolute px-2 pt-2 left-4 md:left-12 top-0 bg-primary-500">
        <span class="text-white text-3xl">E</span>
      </div> -->
      <div class="flex py-auto">
        <CommonLogo />
      </div>
      <div class="flex md:gap-8">
        <nav class="hidden md:flex items-center">
          <UHorizontalNavigation :links="navLinks" />
        </nav>
        <div class="flex flex-row-reverse md:flex-row items-center gap-2">
          <UButton
            class="md:hidden"
            aria-controls="mobile-menu"
            aria-label="Open bar"
            :aria-expanded="isOpen ? 'true' : 'false'"
            icon="i-heroicons-bars-3"
            color="gray"
            variant="ghost"
            @click="isOpen = !isOpen"
          />
          <UTooltip text="Website repo">
            <UButton
              color="white"
              aria-label="Link to this website Github repository"
              variant="ghost"
              icon="i-simple-icons-github"
              to="https://github.com/falcone-gk/portfolio"
              target="_blank"
            />
          </UTooltip>
          <ColorScheme>
            <template #placeholder>
              <div class="h-6 w-8" />
            </template>
            <UButton
              class="hidden md:flex"
              aria-label="Toggle dark mode"
              :icon="iconColorMode"
              color="gray"
              variant="ghost"
              @click="toggleColorMode"
            />
          </ColorScheme>
        </div>
      </div>
      <CommonMobileNav
        id="mobile-menu"
        v-model:open="isOpen"
        :aria-hidden="isOpen ? 'false' : 'true'"
        role="menu"
        :links="links"
      />
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
  {
    label: "Home",
    section: "home",
    to: "/",
    click: () => (isOpen.value = false),
  },
  {
    label: "Blog",
    section: "blog",
    to: "/blog",
    click: () => (isOpen.value = false),
  },
];

const links = [
  navLinks,
  [{ label: "Dark mode", icon: "i-heroicons-moon-solid", input: true }],
];
</script>
