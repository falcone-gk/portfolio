import { z } from "zod";

export default defineEventHandler(async (event) => {
  const textSchema = z.object({
    text: z.string().min(1),
  });
  const body = await readValidatedBody(event, textSchema.safeParse);
  if (!body.success) {
    throw createError({
      status: 400,
      statusMessage: "Invalid request body",
      message: JSON.stringify(body.error.issues),
      data: body.error.issues,
    });
  }

  const data = body.data;
  const hashedText = await hashPassword(data.text);
  return {
    hash: hashedText,
  };
});
