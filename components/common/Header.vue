<template>
  <div
    class="flex items-center bg-primary-50 sticky top-0 z-50 h-[var(--header-height)] border-b-[1px] border-b-gray-200 dark:bg-primary-950 dark:border-b-gray-800"
  >
    <div class="flex justify-between w-full mx-2 my-1">
      <div>
        <p>Logo</p>
      </div>
      <div class="flex gap-8">
        <nav class="flex items-center">
          <ul class="space-x-8">
            <li class="inline-flex" v-for="link in links">
              <p>{{ link.text }}</p>
            </li>
          </ul>
        </nav>
        <div>
          <ColorScheme>
            <UButton
              :icon="iconColorMode"
              @click="toggleColorMode"
              color="gray"
              variant="ghost"
            />
          </ColorScheme>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

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

const links = [
  { text: "About", section: "about" },
  { text: "Experience", section: "experience" },
  { text: "Projects", section: "projects" },
  { text: "Contact", section: "contact" },
];
</script>
