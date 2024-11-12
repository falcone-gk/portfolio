import { eq, count, desc } from "drizzle-orm";
import { paginationSchema } from "~/schemas";

export default defineEventHandler(async (event) => {
  const { page, pageSize } = await getValidatedQuery(
    event,
    paginationSchema.parse,
  );
  const offset = (page - 1) * pageSize;

  const [[totalPosts], posts] = await Promise.all([
    db.select({ count: count() }).from(tables.post),
    db.select()
      .from(tables.post)
      .where(eq(tables.post.isPublished, true))
      .orderBy(desc(tables.post.id))
      .limit(pageSize)
      .offset(offset),
  ]);

  const transformedPosts = posts.map((post) => {
    return {
      ...post,
      tags: JSON.parse(post.tags) as string[],
    };
  });

  const totalPages = Math.ceil(totalPosts.count / pageSize);
  return {
    count: totalPosts.count,
    next:
      page < totalPages
        ? `/api/posts?page=${page + 1}&pageSize=${pageSize}`
        : null,
    previous:
      page > 1 ? `/api/posts?page=${page - 1}&pageSize=${pageSize}` : null,
    results: transformedPosts,
  };
});
