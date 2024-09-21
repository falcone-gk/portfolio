import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export const postSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  tags: z.number().array(),
  body: z.string().min(1),
  isPublished: z.boolean(),
});

export const paginationSchema = z.object({
  page: z.number({ coerce: true }).int().min(1).default(1),
  pageSize: z.number({ coerce: true }).int().min(1).max(100).default(10),
});
