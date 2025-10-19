import type { ProfileType } from "./UserTypes";

export type CommentType = {
  body: string;
  created_on: string;
  id: number;
  post: number;
  post_title: string;
  profile: ProfileType;
};

export type CommentsResponseType = {
  json: CommentType[];
  response: Response;
};

export type CommentResponseType = {
  json: CommentType;
  response: Response;
};
