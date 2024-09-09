<template>
  <div
    ref="mySection"
    class="flex flex-col justify-center min-h-[calc(100vh-var(--header-height))]"
    :class="{ ['show']: props.transition }"
  >
    <section :id="props.id">
      <Typography
        tag="h2"
        variant="bigger"
        :class="{ 'text-center': props.isCenter }"
      >
        {{ props.title }}
      </Typography>
      <div>
        <slot />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  isCenter: {
    type: Boolean,
    default: false,
  },
  transition: {
    type: Boolean,
    default: false,
  },
});

const mySection = ref(null);
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-delay");
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  if (mySection.value && props.transition) {
    observer.observe(mySection.value);
  }
});
</script>

<style scoped>
.animate-delay {
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-name: animate-delay;
}

@keyframes animate-delay {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.show {
  opacity: 0;
  transform: translateY(40px);
}
</style>
