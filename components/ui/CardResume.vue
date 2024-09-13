<template>
  <UCard
    :ui="{
      base: 'flex flex-col',
      header: {
        base: 'h-48',
        padding: '',
      },
      footer: {
        base: 'mt-auto',
      },
    }"
  >
    <template #header>
      <img
        class="w-full h-full object-cover rounded-t-lg"
        :src="props.imageUrl"
        :alt="props.title"
      />
    </template>
    <div>
      <Typography tag="h2" variant="h3" color="gray">
        {{ props.title }}
      </Typography>
    </div>
    <div>
      <p>{{ props.description }}</p>
    </div>

    <template v-if="slots.customFooter" #footer>
      <slot name="customFooter"></slot>
    </template>
  </UCard>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  imageUrl: string;
}>();

const slots = useSlots();
</script>
