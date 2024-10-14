export const useTags = () => {
  const key = "keyTags";
  const currentTags = useState<Tag[] | null>(key, () => null)

  const { data: tags, status, execute: getTags } = useFetch("/api/tags", {
    immediate: false,
    watch: false
  })

  const fetchTags = async () => {
    if (!currentTags.value) {
      await getTags()
      currentTags.value = tags.value
    }

    return currentTags
  }

  return { fetchTags, currentTags };
};
