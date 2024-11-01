<template>
  <div class="md:min-w-[65ch]">
    <div v-if="!props.isPreview">
      <UTextarea v-model="fullBody" :rows="35" readonly />
    </div>
    <div v-else>
      <MDC v-if="post.body.trim()" v-slot="{ data, body }" :value="fullBody">
        <article
          class="p-4 prose dark:prose-invert"
          :class="{
            'max-w-[1000px]': props.isArticle,
            'h-[700px] overflow-y-scroll': !props.isArticle,
          }"
          v-bind="$attrs"
        >
          <div>
            <h1>{{ data.title }}</h1>
            <div>
              <Typography
                color="gray"
                tag="p"
              >
                By: <span class="text-primary-500">Enzo Falcón</span><br>
                Last updated on:
                <span class="text-primary-500">{{
                  data.updatedAt
                    ? new Date(data.updatedAt).toLocaleDateString()
                    : new Date().toLocaleDateString()
                }}</span>
              </Typography>
            </div>
            <div v-if="data.tags" class="flex gap-3 flex-wrap mt-4">
              <UiBadge v-for="(tag, index) in data.tags.split(',')" :key="index" :label="tag" />
            </div>
            <p>{{ data.description }}</p>
          </div>
          <MDCRenderer v-if="body" :body="body" :data="data" />
        </article>
      </MDC>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CorePost, BlogPost, Post } from "~/types";

const props = defineProps({
  post: {
    type: Object as PropType<CorePost | BlogPost | Post>,
    required: true,
  },
  isPreview: {
    type: Boolean,
    default: false,
  },
  isArticle: {
    type: Boolean,
  },
});

function isStringArray(value: unknown): value is string[] {
  if (!Array.isArray(value)) {
    return false;
  }
  return !value.some(v => typeof v !== "string");
}

const stringifyTags = computed(() => {
  const tags = props.post.tags;
  if (tags.length === 0) {
    return "";
  }
  else if (isStringArray(tags)) {
    return tags.join(",");
  }
  else {
    return tags.map(tag => tag.name).join(",");
  }
});

const header = computed(() => {
  return `---
title: ${props.post.title}
description: ${props.post.description}
tags: ${stringifyTags.value}
updatedAt: ${"updatedAt" in props.post ? props.post.updatedAt : ""}
---`;
});
const fullBody = computed(() => {
  return `${header.value}\n${props.post.body}`;
});
</script>
