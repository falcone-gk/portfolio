<template>
  <div class="px-4 py-6 w-full flex flex-col lg:flex-row gap-4">
    <div class="flex-grow">
      <UForm
        :state="dataBody"
        :schema="postSchema"
        @submit="onSubmitNewPost"
        class="space-y-4"
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
              searchable
              multiple
              searchable-placeholder="Search a tag..."
              class="w-full lg:w-48"
              placeholder="Select tags"
              :options="tags"
              option-attribute="name"
              by="id"
              v-model="state.tags"
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
          <UTextarea :rows="20" class="h-full" v-model="state.body" />
        </UFormGroup>

        <div class="flex justify-between">
          <UButton
            type="submit"
            label="Create post"
            :loading="newPostStatus === 'pending'"
          />
        </div>
      </UForm>
    </div>
    <CommonBlogPost
      :title="state.title"
      :description="state.description"
      :body="state.body"
    />
  </div>
</template>

<script setup lang="ts">
import type { Post } from "~/types";
import { postSchema } from "~/schemas";

// const { data: tags } = useLazyFetch("/api/tags");
const { data: tags } = await useTags({ lazy: true });

const template = `# Simple

Simple paragraph

Inline code \`const codeInline: string = 'highlighted code inline'\`{lang="ts"} can be contained in paragraphs.

Code block:
\`\`\`typescript[filename]{1,3-5}meta
import { parseMarkdown } from '@nuxtjs/mdc/runtime'

async function main(mdc: string) {
  const ast = await parseMarkdown(mdc)
  // Do your magic with parsed AST tree

  return ast // [!code ++]
  return ast // [!code --]
}
\`\`\``;

type FormPost = Omit<Post, "id" | "slug" | "createdAt" | "updatedAt">;
const state = reactive<FormPost>({
  title: "",
  description: "",
  tags: [],
  body: template,
  isPublished: false,
});

const dataBody = computed(() => {
  return {
    ...state,
    tags: state.tags.map((tag) => tag.name),
  };
});
const {
  data: newPost,
  status: newPostStatus,
  execute: createPost,
} = useFetch("/api/posts", {
  method: "POST",
  body: dataBody,
  immediate: false,
  watch: false,
});

const { showNotification } = useNotification();
const onSubmitNewPost = async () => {
  await createPost();

  if (newPost.value) {
    showNotification({
      title: "Post created succesfully",
      type: "success",
    });

    state.title = "";
    state.description = "";
    state.tags = [];
    state.body = template;
  }
};
</script>
