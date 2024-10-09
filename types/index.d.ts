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

export interface Post {
  id: number;
  title: string;
  slug: string;
  description: string;
  tags: Tag[];
  body: string;
  isPublished: boolean | null;
  createdAt: Date;
  updatedAt: Date;
}

export type CorePost = Omit<Post, "tags">;

interface BlogPost extends Omit<Post, "tags" | "createdAt" | "updatedAt"> {
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface MTMTagsOnPost {
  posts: CorePost | null;
  tags: Tag | null;
  tags_to_posts: {
    postId: number;
    tagId: number;
  };
}
