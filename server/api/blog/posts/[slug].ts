import { z } from "zod";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const postSlugSchema = z.object({
    slug: z.string().min(1),
  });
  const { slug } = await getValidatedRouterParams(event, postSlugSchema.parse);

  const [post] = await useDrizzle()
    .select({ id: tables.post.id })
    .from(tables.post)
    .where(eq(tables.post.slug, slug));

  if (!post) {
    throw createError({
      status: 404,
      statusMessage: "Post slug not found.",
    });
  }

  const data = await useDrizzle()
    .select()
    .from(tables.tagsToPosts)
    .where(eq(tables.tagsToPosts.postId, post.id))
    .leftJoin(tables.post, eq(tables.tagsToPosts.postId, tables.post.id))
    .leftJoin(tables.tag, eq(tables.tagsToPosts.tagId, tables.tag.id))
    .all();

  if (data.length === 0) {
    throw createError({
      status: 404,
      statusMessage: "Post id not found.",
    });
  }

  const serializedPost = serializePost(data);

  // Return the first post because we know there is only one
  return serializedPost[0];
});
