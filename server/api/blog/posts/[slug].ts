import { z } from "zod";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const postSlugSchema = z.object({
    slug: z.string().min(1),
  });
  const { slug } = await getValidatedRouterParams(event, postSlugSchema.parse);

  const post = await db.query.post.findFirst({
    where: eq(tables.post.slug, slug),
  });

  if (!post) {
    throw createError({
      status: 404,
      statusMessage: "Post slug not found.",
    });
  }

  // Return the first post because we know there is only one
  return {
    ...post,
    tags: JSON.parse(post.tags) as string[],
  };
});
