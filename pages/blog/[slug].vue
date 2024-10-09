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
const route = useRoute();
const slug = route.params.slug;
const { fetchPost } = usePosts();
const post = await fetchPost(slug as string);
</script>
