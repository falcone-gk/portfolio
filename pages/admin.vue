<template>
  <div class="w-full">
    <div
      class="flex items-center px-4 h-[var(--header-height)] border-b-[1px] dark:border-b-gray-800"
    >
      <h1>{{ title }}</h1>
    </div>
    <div class="p-2 overflow-y-scroll min-h-[calc(100vh-var(--header-height))]">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth", "title"],
  layout: "admin",
});

const title = useState("title");
</script>
