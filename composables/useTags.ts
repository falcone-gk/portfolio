interface UseTagsOptions {
  lazy?: boolean;
}

export const useTags = async <T = Tag[]>({
  lazy = false,
}: UseTagsOptions = {}) => {
  const nuxtApp = useNuxtApp();
  // const tags = useState<Tag[] | null>("tags", () => null);
  const key = "keyTags";

  return useAsyncData<T>(
    key,
    async () => {
      const cachedData = nuxtApp.payload.data[key] || nuxtApp.static.data[key];
      if (cachedData) {
        return cachedData;
      }

      const data = await $fetch("/api/tags");
      return data;
    },
    { lazy },
  );
};
