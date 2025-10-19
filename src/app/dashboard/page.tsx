"use server";

// utils
import { getSessionCookie } from "@/utils/serverUtils";

// services
import CommentService from "@/services/CommentService";
import DashboardService from "@/services/DashboardService";
import NotificationService from "@/services/NotificationService";
import PostService from "@/services/PostService";

// components
import DashboardContent from "@/app/dashboard/content";

// types
import type { AuthorStats, AuthorStatsResponseType } from "@/types/AuthorTypes";
import type { CommentsResponseType, CommentType } from "@/types/CommentTypes";
import type {
  NotificationsResponseType,
  NotificationType,
} from "@/types/NotificationTypes";
import type { PostType, PostsResponseType } from "@/types/PostTypes";

type PageRequests = [
  PostsResponseType,
  CommentsResponseType,
  NotificationsResponseType,
  AuthorStatsResponseType,
];

export default async function Dashboard() {
  const session = await getSessionCookie();

  let comments: CommentType[] = [];
  let notifications: NotificationType[] = [];
  let posts: PostType[] = [];
  let stats: AuthorStats = { posts: 0, likes: 0, bookmarks: 0 };

  try {
    const [
      postsRequest,
      commentsRequest,
      notificationsRequest,
      authorStatsRequest,
    ]: PageRequests = await Promise.all([
      PostService.Api.getDashboardPosts({ session }),
      CommentService.Api.getDashboardComments({ session }),
      NotificationService.Api.getDashboardNotifications({ session }),
      DashboardService.Api.getDashboardStats({ session }),
    ]);

    if (authorStatsRequest.response.ok) stats = authorStatsRequest.json;
    if (commentsRequest.response.ok) comments = commentsRequest.json;
    if (notificationsRequest.response.ok)
      notifications = notificationsRequest.json;
    if (postsRequest.response.ok) posts = postsRequest.json;
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);
  }

  if (process.env.VITE_DEBUG) {
    console.log("comments: ", comments);
    console.log("notifications: ", notifications);
    console.log("posts: ", posts);
    console.log("stats: ", stats);
  }

  return (
    <DashboardContent
      comments={comments}
      notifications={notifications}
      posts={posts}
      stats={stats}
    />
  );
}
