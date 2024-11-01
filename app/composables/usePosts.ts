import type { BlogPost } from "~/types";

interface CurrentPostData {
  slug: string | null;
  data: BlogPost | null;
}

export const usePosts = () => {
  const currentPostInformation = useState<CurrentPostData>(
    "currentPostData",
    () => {
      return {
        slug: null,
        data: null,
      };
    },
  );

  const arrayViewedPosts = useState<CurrentPostData[]>(
    "arrayViewedPosts",
    () => [],
  );

  const addViewedPost = (data: BlogPost | null) => {
    if (!data) return;

    const slug = data.slug;
    if (!arrayViewedPosts.value.find(post => post.slug === slug)) {
      arrayViewedPosts.value.push({
        slug,
        data,
      });
    }
  };

  const setCurrentPost = (current: BlogPost) => {
    currentPostInformation.value = {
      data: current,
      slug: current.slug,
    };
    addViewedPost(current);
  };

  const { data: post, execute: getPost } = useFetch(
    () => `/api/blog/posts/${currentPostInformation.value.slug}`,
    {
      immediate: false,
      watch: false,
    },
  );

  const fetchPost = async (slug: string) => {
    if (!arrayViewedPosts.value.find(post => post.slug === slug)) {
      // Not in the array so we need to fetch it
      currentPostInformation.value.slug = slug;
      await getPost();
      currentPostInformation.value.data = post.value;
      addViewedPost(currentPostInformation.value.data);
    }
    else if (currentPostInformation.value.slug !== slug) {
      // It is in the array but the slug is different so we need to look in the array
      const currentPost = arrayViewedPosts.value.find(
        post => post.slug === slug,
      ) as CurrentPostData;
      currentPostInformation.value.slug = slug;
      currentPostInformation.value.data = currentPost?.data;
    }

    return currentPostInformation.value.data;
  };

  return { fetchPost, setCurrentPost };
};
