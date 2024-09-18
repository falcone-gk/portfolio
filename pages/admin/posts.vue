<template>
  <div class="w-full flex">
    <div class="flex-grow">
      <UTextarea :rows="40" class="h-full" v-model="content" />
    </div>
    <MDC v-slot="{ data, body }" :value="content">
      <article class="overflow-y-scroll p-4 prose prose-invert bg-gray-900">
        <MDCRenderer v-if="body" :body="body" :data="data" />
      </article>
    </MDC>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Posts",
});

const examples = {
  default: `---
title: Sam
---

# Simple

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
\`\`\`
`,
};

const content = ref(examples.default);
</script>
