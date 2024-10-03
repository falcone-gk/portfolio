<template>
  <MDC v-if="body.trim()" v-slot="{ data, body }" :value="fullBody">
    <div class="p-4 prose dark:prose-invert" v-bind="$attrs">
      <MDCRenderer v-if="body" :body="body" :data="data" />
    </div>
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
