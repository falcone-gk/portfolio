<template>
  <UForm :schema="tagSchema" :state="state" class="flex">
    <UFormGroup label="New tag" name="tag">
      <div class="flex gap-2">
        <UInput v-model="state.tag" required />
        <UButton
          type="submit"
          label="Add new tag"
          icon="i-heroicons-plus-solid"
        />
      </div>
    </UFormGroup>
  </UForm>
</template>

<script setup lang="ts">
import { z } from "zod";

definePageMeta({
  title: "Tags",
});

const tagSchema = z.object({
  tag: z.string().min(1),
});
const state = reactive({
  tag: "",
});
</script>
