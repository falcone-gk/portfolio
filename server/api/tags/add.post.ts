import { z } from "zod";

export default defineEventHandler(async (event) => {
  const tagSchema = z.object({
    tag: z.string().min(1),
  });
  const body = await readValidatedBody(event, tagSchema.safeParse);

  if (!body.success) {
    throw createError({
      status: 400,
      statusMessage: "Bad request",
      message: "Invalid input body",
    });
  }

  const newTag = await useDrizzle().insert(tables.tag).values({
    name: body.data.tag,
  });

  return newTag;
});
