<template>
  <div class="w-full">
    <div class="mb-4 mx-auto max-w-[1000px]">
      <UButton size="sm" color="gray" icon="i-mdi-chevron-left" variant="link" to="/blog">
        Go Back
      </UButton>
    </div>
    <CommonBlogPost class="mx-auto" :post="post as BlogPost" is-article />
  </div>
</template>

<script lang="ts" setup>
import type { BlogPost } from "~/types";

const route = useRoute();
const slug = route.params.slug;
const { fetchPost } = usePosts();
const post = await fetchPost(slug as string);

if (!post) {
  throw showError({
    statusCode: 404,
    statusMessage: "Post does not exist",
  })
}

useSeoMeta({
  title: post?.title,
  description: post?.description,
  ogTitle: post?.title,
  ogDescription: post?.description
})

</script>
