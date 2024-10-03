import { z } from "zod";
import { eq, inArray } from "drizzle-orm";
import { postSchema } from "~/schemas";
import { slugify } from "~/utils/text";

const partialPostSchema = postSchema.partial();

export default defineValidatedHandler(partialPostSchema, async (event) => {
  if (isServer()) {
    await requireUserSession(event);
  }

  const postIdSchema = z.object({
    id: z.number({ coerce: true }).positive().int(),
  });
  const { id } = await getValidatedRouterParams(event, postIdSchema.parse);

  const data = await readTypeSafeData(event, partialPostSchema);
  if (!data) {
    return "No updates sent.";
  }

  const dataToUpdate = {
    ...data,
    ...(data.title && { slug: slugify(data.title) }),
    updatedAt: new Date(),
  };

  const db = useDrizzle();
  await db.update(tables.post).set(dataToUpdate).where(eq(tables.post.id, id));

  if (data.tags) {
    const tagIds = await db
      .select({
        id: tables.tag.id,
      })
      .from(tables.tag)
      .where(inArray(tables.tag.id, data.tags)); // find tags by id

    // const existingTagIds = await db
    //   .select({
    //     id: tables.tagsToPosts.tagId,
    //   })
    //   .from(tables.tagsToPosts)
    //   .where(eq(tables.tagsToPosts.postId, id));

    // Delete related tags
    await db
      .delete(tables.tagsToPosts)
      .where(eq(tables.tagsToPosts.postId, id));

    // Insert new tags
    const newTagsToPosts = tagIds.map((tagId) => ({
      postId: id,
      tagId: tagId.id,
    }));

    if (newTagsToPosts.length > 0) {
      await db.insert(tables.tagsToPosts).values(newTagsToPosts);
    }
  }

  return {
    status: "success",
    message: "Post updated successfully",
  };
});
