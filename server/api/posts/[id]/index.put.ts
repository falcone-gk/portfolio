import { z } from "zod";
import { eq, inArray } from "drizzle-orm";
import { postSchema } from "~/schemas";

export default defineEventHandler(async (event) => {
  const postIdSchema = z.object({
    id: z.number({ coerce: true }).positive().int(),
  });
  const { id } = await getValidatedRouterParams(event, postIdSchema.parse);

  const partialPostSchema = postSchema.partial();
  const body = await readValidatedBody(event, partialPostSchema.safeParse);

  if (!body.data) {
    return "No updates sent.";
  }

  const db = useDrizzle();

  await db.update(tables.post).set(body.data).where(eq(tables.post.id, id));

  if (body.data.tags) {
    const tagIds = await db
      .select({
        id: tables.tag.id,
      })
      .from(tables.tag)
      .where(inArray(tables.tag.id, body.data.tags)); // find tags by id

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
