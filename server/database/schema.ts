import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const tag = sqliteTable("tags", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
});

export const post = sqliteTable("posts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  slug: text("slug").default("").notNull(),
  description: text("description").notNull(),
  body: text("body").notNull(),
  isPublished: integer("is_published", { mode: "boolean" }).default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const tagsToPosts = sqliteTable("tags_to_posts", {
  tagId: integer("tag_id")
    .notNull()
    .references(() => tag.id),
  postId: integer("post_id")
    .notNull()
    .references(() => post.id),
});
