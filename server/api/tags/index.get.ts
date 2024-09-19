export default defineEventHandler(async (event) => {
  const tags = await useDrizzle().select().from(tables.tag).all();
  return tags;
});
