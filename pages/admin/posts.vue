<template>
  <div
    class="min-h-[49px] flex-shrink-0 flex items-center border-b border-gray-200 dark:border-gray-800 gap-x-4 py-0 px-1.5 overflow-x-auto"
  >
    <div class="flex items-center flex-1 gap-x-1.5">
      <UHorizontalNavigation
        :links="postLinks"
        class="border-b border-gray-200 dark:border-gray-800"
      />
    </div>
  </div>
  <NuxtPage />
</template>

<script setup lang="ts">
definePageMeta({
  title: "Posts",
});

const postLinks = [
  { label: "Post list", to: "/admin/posts", exact: true },
  { label: "Create Post", to: "/admin/posts/create" },
  { label: "Edit Post", to: "/admin/posts/edit" },
];
</script>
