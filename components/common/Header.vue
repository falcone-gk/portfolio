<template>
  <div
    class="flex items-center bg-gray-50 sticky top-0 z-50 h-[var(--header-height)] border-b-[1px] border-b-gray-200 dark:bg-gray-950 dark:border-b-gray-800"
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
        <div class="flex my-auto">
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
