<template>
  <UCard :ui="{ rounded: '' }">
    <template #header>
      <Typography tag="h2" variant="h3" color="gray">
        {{ props.post.title }}
      </Typography>
    </template>
    <div>
      <p>{{ props.post.description }}</p>
    </div>

    <template #footer>
      <UButton
        label="Read more"
        variant="outline"
        :to="props.to"
        @click="onClickReadMore"
      />
    </template>
  </UCard>
</template>

<script setup lang="ts">
import type { BlogPost } from "~/types";

const props = defineProps<{
  post: BlogPost;
  to: String;
}>();

const { setCurrentPost } = usePosts();
const onClickReadMore = () => {
  setCurrentPost(props.post);
};
</script>
