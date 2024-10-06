import { postSchema } from "~/schemas";
import { slugify } from "~/utils/text";

export default defineValidatedHandler(postSchema, async (event) => {
  if (isServer()) {
    await requireUserSession(event);
  }
  const data = await readTypeSafeData(event, postSchema);

  await useDrizzle()
    .insert(tables.post)
    .values({
      // title: data.title,
      // description: data.description,
      // body: data.body,
      ...data,
      slug: slugify(data.title),
      tags: JSON.stringify(data.tags),
    });

  setResponseStatus(event, 201);
  return {
    status: "success",
    message: "Post created successfully",
  };
});
