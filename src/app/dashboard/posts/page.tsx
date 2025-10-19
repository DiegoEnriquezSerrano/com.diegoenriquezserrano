"use server";

// externals
import { getSessionCookie } from "@/utils/serverUtils";

// services
import PostService from "@/services/PostService";

// components
import DashboardPostsContent from "@/app/dashboard/posts/content";

const { getDashboardPosts } = PostService.Api;

export default async function Dashboardposts() {
  const session = await getSessionCookie();

  try {
    const [postsRequest] = await Promise.all([getDashboardPosts({ session })]);

    const posts = postsRequest.response.ok ? postsRequest.json : [];

    if (process.env.VITE_DEBUG) {
      console.log("posts: ", posts);
    }

    return <DashboardPostsContent posts={posts} />;
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);
  }
}
