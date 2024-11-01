import { z } from "zod";

const tagSchema = z.object({
  tag: z.string().min(1),
});

export default defineValidatedHandler(tagSchema, async (event) => {
  if (isServer()) {
    await requireUserSession(event);
  }
  const data = await readTypeSafeData(event, tagSchema);

  const [newTag] = await useDrizzle().insert(tables.tag).values({
    name: data.tag,
  }).returning();

  setResponseStatus(event, 201);
  return {
    status: "success",
    message: "Tag created successfully",
    data: newTag,
  };
});
