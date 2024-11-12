import { z } from "zod";
import { eq } from "drizzle-orm";
import { postSchema } from "~/schemas";
import { slugify } from "~/utils/text";

const partialPostSchema = postSchema.partial();

export default defineAdminResponseHandler(async (event) => {
  const postIdSchema = z.object({
    id: z.number({ coerce: true }).positive().int(),
  });
  const { id } = await getValidatedRouterParams(event, postIdSchema.parse);

  const data = event.context.body as z.input<typeof partialPostSchema>;
  if (!data) {
    return "No updates sent.";
  }

  // Remove tags because of typescript error
  const dataNoTags = {
    ...data,
    tags: undefined,
  };
  const dataToUpdate = {
    ...dataNoTags,
    ...(data.title && { slug: slugify(data.title) }),
    ...(data.tags && { tags: JSON.stringify(data.tags) }),
    updatedAt: new Date(),
  };

  await db.update(tables.post).set(dataToUpdate).where(eq(tables.post.id, id));

  return {
    status: "success",
    message: "Post updated successfully",
  };
}, partialPostSchema);
