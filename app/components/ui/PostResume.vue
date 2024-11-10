<template>
  <UCard
    :ui="{
      base: 'flex flex-col',
      rounded: '',
      header: {
        base: 'lg:h-48 md:h-40',
      },
      footer: {
        base: 'mt-auto',
      },
    }"
  >
    <template #header>
      <Typography tag="h2" variant="h3" color="gray">
        {{ props.post.title }}
      </Typography>
    </template>
    <div class="flex flex-col h-48 md:h-56 justify-between">
      <div class="h-44 md:h-52 overflow-y-scroll">
        <p>{{ props.post.description }}</p>
      </div>
      <div>
        <Typography color="gray">
          Last updated: <span class="text-primary-600 dark:text-primary-400">{{ formatISOToDate(props.post.updatedAt) }}</span>
        </Typography>
      </div>
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
  to: string;
}>();

const { setCurrentPost } = usePosts();
const onClickReadMore = () => {
  setCurrentPost(props.post);
};
</script>
