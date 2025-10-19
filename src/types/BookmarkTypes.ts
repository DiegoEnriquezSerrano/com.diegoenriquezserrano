import { PostType } from "./PostTypes";
import { UserType } from "./UserTypes";

export type BookmarkType = {
  id: number;
  post: PostType;
  user: UserType;
};

export type BookmarksResponseType = {
  json: BookmarkType[];
  response: Response;
};

export type BookmarkResponseType = {
  json: BookmarkType;
  response: Response;
};
