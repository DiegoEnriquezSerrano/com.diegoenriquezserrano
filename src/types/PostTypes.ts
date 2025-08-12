import { CategoryType } from "./CategoryTypes";

export type PostType = {
  body: string;
  categories: CategoryType[];
  cover_image_url: string;
  created_on: string;
  description: string;
  excerpt: string;
  featured: boolean;
  last_modified: string;
  slug: string;
  title: string;
};

export type PostsResponseType = {
  json: PostType[];
  response: Response;
};

export type PostResponseType = {
  json: PostType;
  response: Response;
};
