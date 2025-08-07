import type { CommentType } from "./CommentTypes";
import type { PostType } from "./PostTypes";
import type { ProfileType } from "./UserTypes";

export type NotificationType = {
  comment?: {
    body: CommentType["body"];
    created_on: CommentType["created_on"];
    id: CommentType["id"];
  };
  id: number;
  post: {
    cover_image_url: PostType["cover_image_url"];
    excerpt: PostType["excerpt"];
    id: number;
    slug: PostType["slug"];
    title: PostType["title"];
    profile: ProfileType;
  };
  profile: ProfileType;
  read: boolean;
  type: "like" | "comment";
};

export type NotificationsResponseType = {
  json: NotificationType[];
  response: Response;
};

export type NotificationResponseType = {
  json: NotificationType;
  response: Response;
};
