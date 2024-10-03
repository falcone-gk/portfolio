<template>
  <div class="w-full">
    <CommonBlogPost
      class="mx-auto"
      :title="post?.title"
      :description="post?.description"
      :body="post?.body"
    />
  </div>
</template>

<script lang="ts" setup>
const nuxtApp = useNuxtApp();
const route = useRoute();
const { slug } = route.params;
const { data: post } = await useFetch(`/api/blog/posts/${slug}`, {
  getCachedData: (key) => {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
  },
});
</script>
