import type { z } from "zod";
import type { loginSchema } from "~/schemas";

export interface UserSession {
  username: string;
  isAdmin: boolean;
}

declare module "h3" {
  interface H3EventContext {
    user: UserSession;
  }
}

export type LoginForm = z.input<typeof loginSchema>;

export interface Skill {
  name: string;
  icon: string;
}

export interface DevSkills {
  backend: Skill[];
  frontend: Skill[];
  extra: Skill[];
}

export interface Experience {
  title: string;
  description: string;
  date: string;
  tools: Skill[];
}

export interface Tag {
  id: number;
  name: string;
}

export interface CorePost {
  title: string;
  description: string;
  tags: Tag[];
  body: string;
  isPublished: boolean;
}

export interface Post extends CorePost {
  id: number;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

interface BlogPost extends Omit<Post, "tags"> {
  tags: string[];
}
