CREATE TABLE `tags_to_articles` (
	`tag_id` integer NOT NULL,
	`article_id` integer NOT NULL,
	FOREIGN KEY (`tag_id`) REFERENCES `tags`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`article_id`) REFERENCES `articles`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
DROP TABLE `tagsToArticles`;--> statement-breakpoint
ALTER TABLE `articles` ADD `description` text NOT NULL;