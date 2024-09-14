<template>
  <UNotifications />
  <NuxtLayout class="bg-gray-50 dark:bg-gray-950">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    if (titleChunk === "Enzo Falcon") return titleChunk;
    return titleChunk ? `${titleChunk} - Enzo Falcon` : "Enzo Falcon";
  },
});
</script>
