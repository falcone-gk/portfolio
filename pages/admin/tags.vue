<template>
  <div class="px-4 py-6 space-y-16">
    <div>
      <Typography class="mb-4" tag="h2" variant="h3">
        Tags availables
      </Typography>

      <div class="flex flex-col-reverse md:flex-row gap-2 py-3.5">
        <div
          class="grid flex-1 auto-cols-auto grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-2"
        >
          <UInput
            placeholder="Buscar..."
            icon="i-heroicons-magnifying-glass-solid"
            :value="q"
            @input="onInputSearch"
          />
        </div>
      </div>

      <UTable
        :loading="status !== 'success'"
        :columns="[
          { key: 'id', label: 'ID' },
          { key: 'name', label: 'Name' },
        ]"
        :rows="filteredRows"
        :ui="{
          base: 'lg:min-w-[700px] border-y border-gray-200 dark:border-gray-700',
        }"
      />
      <div v-if="tags" class="mt-4">
        <UPagination
          v-model="page"
          :page-count="pageCount"
          :total="tags.length"
        />
      </div>
    </div>

    <UForm
      :schema="tagSchema"
      :state="state"
      class="flex"
      @submit="onAddNewTag"
    >
      <UFormGroup label="New tag" name="tag" required>
        <div class="flex gap-2">
          <UInput v-model="state.tag" />
          <UButton
            type="submit"
            label="Add new tag"
            icon="i-heroicons-plus-solid"
            :loading="addTagStatus === 'pending'"
          />
        </div>
      </UFormGroup>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";

definePageMeta({
  title: "Tags",
});

// const { data: tags, status } = useLazyFetch("/api/tags");
const { data: tags, status } = await useTags({ lazy: true });

// Filter data with pagination
const q = ref("");
const timeout = ref();
const onInputSearch = (event: Event) => {
  if (timeout) {
    clearTimeout(timeout.value);
  }
  timeout.value = setTimeout(async function () {
    q.value = (event.target as HTMLInputElement).value;
  }, 700);
};
const page = ref(1);
const pageCount = 5;
const filteredRows = computed(() => {
  if (!tags.value) {
    return [];
  }

  if (!q.value) {
    return tags.value;
  }

  const tagsFiltered = tags.value.filter((tag) => {
    return Object.values(tag).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase());
    });
  });
  return tagsFiltered.slice(
    (page.value - 1) * pageCount,
    page.value * pageCount,
  );
});

// New tag form validation
const tagSchema = z.object({
  tag: z.string().min(1),
});
const state = reactive({
  tag: "",
});

const {
  data: addTagData,
  status: addTagStatus,
  execute: addTag,
} = useFetch("/api/tags/add", {
  immediate: false,
  watch: false,
  method: "POST",
  body: state,
});

const { showNotification } = useNotification();
const onAddNewTag = async () => {
  await addTag();

  if (addTagData.value) {
    showNotification({
      title: "Tag added succesfully",
      type: "success",
    });

    state.tag = "";
  }
};
</script>
