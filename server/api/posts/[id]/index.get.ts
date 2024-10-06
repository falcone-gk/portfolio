import { z } from "zod";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const postIdSchema = z.object({
    id: z.number({ coerce: true }).positive().int(),
  });
  const { id } = await getValidatedRouterParams(event, postIdSchema.parse);

  const data = await useDrizzle()
    .select()
    .from(tables.post)
    .where(eq(tables.post.id, id));

  if (data.length === 0) {
    throw createError({
      status: 404,
      statusMessage: "Post id not found.",
    });
  }

  const post = {
    ...data[0],
    tags: JSON.parse(data[0].tags) as string[],
  };

  return post;
});
