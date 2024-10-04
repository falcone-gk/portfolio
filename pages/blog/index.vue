<template>
  <Typography tag="h1" variant="h1"> Blog </Typography>
  <div class="mt-10">
    <DataLoading
      :data="posts"
      :list="posts?.results"
      :loading="status !== 'success'"
    >
      <template #data="{ data: posts }">
        <CommonGrid>
          <UiPostResume
            v-for="(post, index) in posts.results"
            :title="post.title"
            :description="post.description"
            :key="index"
            :to="`/blog/${post.slug}`"
          />
        </CommonGrid>
      </template>
    </DataLoading>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Blog",
  description: "Blog page to show programming language content and tips.",
  ogDescription: "Blog page to show programming language content and tips.",
  ogTitle: "Blog",
});

const nuxtApp = useNuxtApp();
const page = ref(1);
const pageCount = ref(10);
const { data: posts, status } = useLazyFetch("/api/blog/posts", {
  query: {
    page: page,
    pageCount: pageCount,
  },
  getCachedData: (key) => {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
  },
});
</script>
