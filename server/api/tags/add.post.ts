import { z } from "zod";

const tagSchema = z.object({
  tag: z.string().min(1),
});

export default defineAdminResponseHandler(async (event) => {
  const data = event.context.body as z.input<typeof tagSchema>;

  const [newTag] = await db.insert(tables.tag).values({
    name: data.tag,
  }).returning();

  setResponseStatus(event, 201);
  return {
    status: "success",
    message: "Tag created successfully",
    data: newTag,
  };
}, tagSchema);
