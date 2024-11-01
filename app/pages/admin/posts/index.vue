<template>
  <div>
    <UTable
      :loading="status !== 'success'"
      :rows="posts?.results || []"
      :columns="columns"
      :ui="{
        base: 'border-y border-gray-200 dark:border-gray-700',
      }"
    >
      <template #actions-data="{ row }">
        <div class="space-x-2">
          <UTooltip text="Go to post">
            <UButton
              color="gray"
              icon="i-heroicons-eye-solid"
              size="xs"
              :to="`/blog/${row.slug}`"
            />
          </UTooltip>

          <UTooltip text="Edit post">
            <UButton
              size="xs"
              icon="i-heroicons-pencil-solid"
              color="gray"
              :to="`/admin/posts/edit/${row.id}`"
            />
          </UTooltip>

          <UTooltip text="Delete post">
            <UButton icon="i-heroicons-trash-solid" color="red" size="xs" />
          </UTooltip>
        </div>
      </template>

      <template #isPublished-data="{ row }">
        <UBadge
          size="xs"
          :label="row.isPublished ? 'Published' : 'In Progress'"
          :color="row.isPublished ? 'emerald' : 'orange'"
          variant="subtle"
        />
      </template>

      <template #createdAt-data="{ row }">
        {{ formatDate(row.createdAt) }}
      </template>
    </UTable>

    <div v-if="posts" class="ml-4 mt-4">
      <UPagination
        v-model="page"
        :page-count="pageCount"
        :total="posts.count"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const columns = [
  { key: "id", label: "ID" },
  { key: "title", label: "Title", rowClass: "max-w-xs truncate" },
  { key: "description", label: "Description", rowClass: "max-w-xs truncate" },
  { key: "isPublished", label: "Status" },
  { key: "createdAt", label: "Date Creation" },
  { key: "actions", label: "Actions" },
];
const page = ref(1);
const pageCount = ref(10);
const { data: posts, status } = useLazyFetch("/api/posts", {
  query: {
    page: page,
    pageCount: pageCount,
  },
});

const formatDate = (date: Date): string => {
  const formatedDate = new Date(date);
  return formatedDate.toLocaleDateString();
};
</script>
