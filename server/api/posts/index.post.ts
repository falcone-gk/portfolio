import { postSchema } from "~/schemas";
import { slugify } from "~/utils/text";

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, postSchema.safeParse);

  if (!body.success) {
    throw createError({
      status: 400,
      statusMessage: "Validation Error",
      message: JSON.stringify(body.error.issues),
    });
  }

  const data = body.data;

  const [newPost] = await useDrizzle()
    .insert(tables.post)
    .values({
      title: data.title,
      description: data.description,
      body: data.body,
      slug: slugify(data.title),
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .returning({ id: tables.post.id });

  const mtmTagsToPost = data.tags.map((tag) => {
    return { tagId: tag, postId: newPost.id };
  });
  await useDrizzle().insert(tables.tagsToPosts).values(mtmTagsToPost);

  setResponseStatus(event, 201);
  return {
    status: "success",
    message: "Post created successfully",
  };
});
