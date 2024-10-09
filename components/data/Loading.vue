<template>
  <div>
    <!--Loading Components section-->
    <div v-if="props.loading">
      <slot name="loading">
        <DataLoadingMessage :message="props.loadingMessage" />
      </slot>
    </div>

    <div v-else>
      <!--Error section-->
      <div v-if="!hasData">
        <slot name="error">
          <DataError />
        </slot>
      </div>

      <!--Data section-->
      <div v-else>
        <div v-if="isDataEmpty">
          <DataEmpty :message="props.emptyMessage" />
        </div>
        <div v-else>
          <slot name="data" :data="resolvedData"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup generic="T">
const props = defineProps<{
  loading?: boolean;
  data: T | { results: T[] } | null;
  emptyMessage?: string;
  loadingMessage?: string;
}>();

// Check if data exists and is not null
const hasData = computed(() => {
  return props.data !== null;
});

// Resolve the data whether it's in 'results' or 'data'
const resolvedData = computed(() => {
  if (props.data && Array.isArray((props.data as { results: T[] }).results)) {
    return (props.data as { results: T[] }).results;
  }
  return props.data;
});

// Check if the data is empty
const isDataEmpty = computed(() => {
  const data = resolvedData.value;
  return Array.isArray(data) ? data.length === 0 : false;
});
</script>
