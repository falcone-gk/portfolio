<template>
  <div v-if="post" class="px-4 py-6 w-full flex flex-col lg:flex-row gap-4">
    <div class="flex-grow">
      <UForm
        :state="dataBody"
        :schema="postSchema"
        class="space-y-4"
        @submit="onSubmitNewPost"
      >
        <UFormGroup label="Title" name="title" required>
          <UInput v-model="state.title" />
        </UFormGroup>

        <UFormGroup label="Description" name="description" required>
          <UInput v-model="state.description" />
        </UFormGroup>

        <div class="flex gap-4 items-start lg:items-end lg:gap-12">
          <UFormGroup label="Tags" name="tags">
            <USelectMenu
              v-model="state.tags"
              searchable
              multiple
              searchable-placeholder="Search a tag..."
              class="w-full lg:w-48"
              placeholder="Select tags"
              :options="tags as Tag[]"
              option-attribute="name"
              by="id"
            />
          </UFormGroup>

          <div class="flex text-sm flex-col gap-2">
            <div>
              <UFormGroup label="Publish" name="isPublished">
                <UToggle
                  v-model="state.isPublished"
                  on-icon="i-heroicons-check-20-solid"
                  off-icon="i-heroicons-x-mark-20-solid"
                />
              </UFormGroup>
            </div>
          </div>
        </div>

        <UFormGroup label="Body" name="body" required>
          <UTextarea v-model="state.body" :rows="20" class="h-full" />
        </UFormGroup>

        <div class="flex justify-between">
          <UButton
            type="submit"
            label="Save post"
            :loading="savedPostStatus === 'pending'"
          />
          <UToggle
            v-model="preview"
            on-icon="i-heroicons-eye"
            off-icon="i-heroicons-eye-slash"
            size="lg"
          />
        </div>
      </UForm>
    </div>
    <CommonBlogPost :post="state" :is-preview="preview" />
  </div>
</template>

<script setup lang="ts">
import type { CorePost, Tag } from "~/types";
import { postSchema } from "~/schemas";

const { fetchTags } = useTags();
const tags = await fetchTags();

const state = reactive<CorePost>({
  title: "",
  description: "",
  tags: [],
  body: "",
  isPublished: false,
});

const preview = ref(false);

const route = useRoute();
const { data: post } = useLazyFetch(`/api/posts/${route.params.id}`, {
  onResponse: ({ response }) => {
    const data = response._data;
    state.title = data.title;
    state.description = data.description;
    state.body = data.body;
    state.isPublished = data.isPublished;

    if (tags.value) {
      state.tags = tags.value.filter(tag => data.tags.includes(tag.name));
    }
  },
});

const dataBody = computed(() => {
  return {
    ...state,
    tags: state.tags.map(tag => tag.name),
  };
});
const {
  data: savedPost,
  status: savedPostStatus,
  execute: savePost,
} = useFetch(`/api/posts/${route.params.id}`, {
  method: "PUT",
  body: dataBody,
  immediate: false,
  watch: false,
});

const { showNotification } = useNotification();
const onSubmitNewPost = async () => {
  await savePost();

  if (savedPost.value) {
    showNotification({
      title: "Post saved successfully",
      type: "success",
    });
  }
};
</script>
