import { z } from "zod";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const postSlugSchema = z.object({
    slug: z.string().min(1),
  });
  const { slug } = await getValidatedRouterParams(event, postSlugSchema.parse);

  const data = await useDrizzle()
    .select()
    .from(tables.post)
    .where(eq(tables.post.slug, slug));

  if (data.length === 0) {
    throw createError({
      status: 404,
      statusMessage: "Post slug not found.",
    });
  }

  // Return the first post because we know there is only one
  return {
    ...data[0],
    tags: JSON.parse(data[0].tags) as string[],
  };
});
