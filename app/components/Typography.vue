<template>
  <component :is="computedTag" :class="{ [classes]: true }" v-bind="$attrs">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { twMerge } from "tailwind-merge";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a";
type Variant = "body" | "h1" | "h2" | "h3" | "big" | "bigger" | "biggest" | "small" | "smaller";
type ColorState = "primary" | "white" | "info" | "danger" | "gray" | "black";

interface Props {
  tag?: Tag;
  variant?: Variant;
  color?: ColorState;
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
  const classLookup: Record<Variant, string> = {
    h1: "text-2xl font-bold sm:text-3xl md:text-4xl",
    h2: "text-xl font-bold sm:text-2xl md:text-3xl",
    h3: "text-lg font-bold sm:text-xl md:text-2xl",
    big: "text-lg md:text-xl",
    bigger: "text-[2.50rem] md:text-[3.25rem]",
    biggest: "text-[4.25rem] lg:text-[6.25rem]",
    body: "text-base",
    small: "text-sm",
    smaller: "text-xs",
  };
  return classLookup[props.variant];
});

const colorClasses = computed(() => {
  const classLookup: Record<ColorState, string> = {
    primary: "text-primary-500 dark:text-primary-400",
    danger: "text-red-500 dark:text-red-400",
    gray: "text-black dark:text-white",
    info: "text-cyan-500 dark:text-cyan-400",
    white: "text-white",
    black: "text-black",
  };
  return classLookup[props.color];
});

const classes = computed(() => {
  return twMerge(variantClasses.value, colorClasses.value);
});
</script>
