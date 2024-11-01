<template>
  <NuxtPage />
</template>

<script setup lang="ts">
// The middleware is required to ensure that the user is authenticated
// and that the title is set for each view in admin
// In order to get the title, we need to add title to the page meta
// in each view
definePageMeta({
  middleware: ["auth", "title"],
  layout: "admin",
});
</script>
