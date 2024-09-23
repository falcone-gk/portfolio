import { z } from "zod";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const postIdSchema = z.object({
    id: z.number({ coerce: true }).positive().int(),
  });
  const { id } = await getValidatedRouterParams(event, postIdSchema.parse);

  const data = await useDrizzle()
    .select()
    .from(tables.tagsToPosts)
    .where(eq(tables.tagsToPosts.postId, id))
    .leftJoin(tables.post, eq(tables.tagsToPosts.postId, tables.post.id))
    .leftJoin(tables.tag, eq(tables.tagsToPosts.tagId, tables.tag.id))
    .all();

  if (data.length === 0) {
    throw createError({
      status: 404,
      statusMessage: "Post id not found.",
    });
  }

  const postsMap = new Map();

  // Organize posts and tags
  data.forEach((item) => {
    const post = item.posts!;
    const tag = item.tags;

    if (!postsMap.has(post.id)) {
      postsMap.set(post.id, {
        ...post,
        tags: [],
      });
    }

    postsMap.get(post.id).tags.push(tag);
  });

  // Convert Map to array
  const result = Array.from(postsMap.values());

  return result[0];
});
