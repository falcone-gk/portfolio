<template>
  <MDC v-if="body.trim()" v-slot="{ data, body }" :value="fullBody">
    <article class="p-4 prose dark:prose-invert bg-gray-100 dark:bg-gray-900">
      <MDCRenderer v-if="body" :body="body" :data="data" />
    </article>
  </MDC>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  extraData?: string;
  body: string;
}>();

const header = computed(() => {
  return `---\ntitle: ${props.title}\ndescription: ${props.description}\n---`;
});
const fullBody = computed(() => {
  return `${header.value}\n${props.body}`;
});
</script>
