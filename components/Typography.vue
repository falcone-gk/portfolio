<template>
  <component :is="computedTag" :class="{ [classes]: true }" v-bind="$attrs">
    <slot />
  </component>
</template>

<script lang="ts" setup>
interface Props {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a";
  variant?: "body" | "h1" | "h2" | "h3" | "big" | "bigger" | "biggest" | "small" | "smaller";
  color?: "primary" | "white" | "info" | "danger" | "gray" | "black";
}

const props = withDefaults(defineProps<Props>(), {
  tag: "p",
  variant: "body",
  color: "primary",
});

const computedTag = computed(() => {
  if (props.tag === "a") {
    return resolveComponent("NuxtLink");
  }
  return props.tag;
});

const variantClasses = computed(() => {
  const classLookup = {
    h1: "text-2xl font-bold sm:text-3xl md:text-4xl",
    h2: "text-xl font-bold sm:text-2xl md:text-3xl",
    h3: "text-lg font-bold sm:text-xl md:text-2xl",
    big: "text-xl font-bold",
    bigger: "text-[2.50rem] font-bold md:text-[3.25rem]",
    biggest: "font-bold text-[4.25rem] lg:text-[6.25rem]",
    body: "text-base",
    small: "text-sm",
    smaller: "text-xs",
  };
  return classLookup[props.variant as keyof typeof classLookup];
});

const colorClasses = computed(() => {
  const classLookup = {
    primary: "text-primary-500 dark:text-primary-400",
    danger: "text-red-500 dark:text-red-400",
    gray: "text-black dark:text-white",
    info: "text-cyan-500 dark:text-cyan-400",
    white: "text-white",
    black: "text-black",
  };
  return classLookup[props.color as keyof typeof classLookup];
});

const classes = computed(() => {
  return variantClasses.value + " " + colorClasses.value;
});
</script>
