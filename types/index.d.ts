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
  title: string;
  description: string;
  tags: Tag[];
  body: string;
  isPublished: boolean;
}
