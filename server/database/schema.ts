import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const tag = sqliteTable("tags", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
});

export const article = sqliteTable("articles", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  body: text("body").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const tagsToArticles = sqliteTable("tagsToArticles", {
  tagId: integer("tag_id")
    .notNull()
    .references(() => tag.id),
  articleId: integer("article_id")
    .notNull()
    .references(() => article.id),
});
