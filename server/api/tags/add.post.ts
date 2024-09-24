import { z } from "zod";

const tagSchema = z.object({
  tag: z.string().min(1),
});

export default defineValidatedHandler(tagSchema, async (event) => {
  const data = await readTypeSafeData(event, tagSchema);

  await useDrizzle().insert(tables.tag).values({
    name: data.tag,
  });

  setResponseStatus(event, 201);
  return {
    status: "success",
    message: "Tag created successfully",
  };
});
