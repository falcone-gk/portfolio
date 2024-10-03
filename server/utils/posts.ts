import { CorePost, MTMTagsOnPost, Post } from "~/types";

export const serializePost = (mtmTagsOnPost: MTMTagsOnPost[]) => {
  const postsMap = new Map<number, Post>();

  // Organize posts and tags
  mtmTagsOnPost.forEach((item) => {
    const post = item.posts as CorePost;
    const tag = item.tags;

    if (!postsMap.has(post.id)) {
      postsMap.set(post.id, {
        ...post,
        tags: [],
      });
    }

    if (tag) {
      postsMap.get(post.id)?.tags.push(tag);
    }
  });

  // Convert Map to array
  const result = Array.from(postsMap.values());

  return result;
};
