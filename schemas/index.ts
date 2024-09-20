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
