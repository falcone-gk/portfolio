<template>
  <USlideover
    class="md:hidden"
    v-model="isOpen"
    side="left"
    :ui="{
      width: 'relative w-5/6 max-w-md',
      base: '',
    }"
  >
    <UCard
      class="h-full"
      :ui="{
        base: 'flex flex-col',
        background: 'bg-gray-50 dark:bg-gray-950',
      }"
    >
      <UVerticalNavigation
        :links="props.links"
        :ui="{
          active: 'before:bg-gray-200 dark:before:bg-gray-500',
        }"
      >
        <template #badge="{ link }">
          <div v-if="link.input" class="flex items-center ml-auto">
            <UToggle v-model="selected" @click="toggleColorMode" />
          </div>
        </template>
      </UVerticalNavigation>
    </UCard>
  </USlideover>
</template>

<script setup lang="ts">
import type { VerticalNavigationLink } from "#ui/types";

const props = defineProps<{
  links: VerticalNavigationLink[] | VerticalNavigationLink[][];
}>();

const isOpen = defineModel<boolean>("open", { required: true });

// color mode
const colorMode = useColorMode();
const selected = ref<boolean>(colorMode.preference === "dark" ? true : false);
const toggleColorMode = () => {
  const colorSwitcher = {
    light: "dark",
    dark: "light",
  };
  colorMode.preference = colorSwitcher[colorMode.value as "light" | "dark"];
};
</script>
