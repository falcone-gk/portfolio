<template>
  <NuxtLoadingIndicator />
  <UModal />
  <UNotifications />
  <NuxtLayout class="bg-gray-50 dark:bg-gray-950">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    if (titleChunk === "FalconeX") return titleChunk;
    return titleChunk ? `${titleChunk} - FalconeX` : "FalconeX";
  },
});
</script>
