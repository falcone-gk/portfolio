export default defineAppConfig({
  ui: {
    primary: "customPrimary",
    gray: "customGray",
    button: {
      rounded: "rounded-none",
      variant: {
        solid: "dark:text-black",
      },
    },
    horizontalNavigation: {
      before: "before:rounded-none before:h-8 before:top-2",
    },
    verticalNavigation: {
      base: "before:rounded-none",
    },
  },
});
