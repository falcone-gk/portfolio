import { z } from "zod";

export default defineEventHandler(async (event) => {
  const tagSchema = z.object({
    tag: z.string().min(1),
  });
  const body = await readValidatedBody(event, tagSchema.safeParse);

  if (!body.success) {
    throw createError({
      status: 400,
      statusMessage: "Validation Error",
      message: JSON.stringify(body.error.issues),
    });
  }

  await useDrizzle().insert(tables.tag).values({
    name: body.data.tag,
  });

  setResponseStatus(event, 201);
  return {
    status: "success",
    message: "Tag created successfully",
  };
});
