import type { z } from "zod";
import { postSchema } from "~/schemas";
import { slugify } from "~/utils/text";

export default defineAdminResponseHandler(async (event) => {
  const data = event.context.body as z.input<typeof postSchema>;
  await db
    .insert(tables.post)
    .values({
      ...data,
      slug: slugify(data.title),
      tags: JSON.stringify(data.tags),
    });

  setResponseStatus(event, 201);
  return {
    status: "success",
    message: "Post created successfully",
  };
}, postSchema);
