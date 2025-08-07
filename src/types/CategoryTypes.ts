import { UserType } from "./UserTypes";

export type CategoryType = {
  id: number;
  name: string;
  post_count?: number;
  slug: string;
  user?: UserType;
};

export type CategoriesResponseType = {
  json: CategoryType[];
  response: Response;
};

export type CategoryResponseType = {
  json: CategoryType;
  response: Response;
};
