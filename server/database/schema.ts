import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const tag = sqliteTable("tags", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
});

export const post = sqliteTable("posts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull().unique(),
  slug: text("slug").notNull(),
  description: text("description").notNull(),
  tags: text("tags").notNull().default("[]"),
  body: text("body").notNull(),
  isPublished: integer("is_published", { mode: "boolean" })
    .notNull()
    .default(false),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(current_timestamp)`),
});

// export const tagsToPosts = sqliteTable("tags_to_posts", {
//   tagId: integer("tag_id")
//     .notNull()
//     .references(() => tag.id),
//   postId: integer("post_id")
//     .notNull()
//     .references(() => post.id),
// });
