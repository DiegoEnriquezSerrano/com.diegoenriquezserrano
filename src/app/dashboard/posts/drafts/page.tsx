"use server";

// externals
import { getSessionCookie } from "@/utils/serverUtils";

// services
import PostService from "@/services/PostService";

// components
import DashboardDraftPostsContent from "./content";

const { getDashboardPostDrafts } = PostService.Api;

export default async function Dashboardposts() {
  const session = await getSessionCookie();

  try {
    const [postsRequest] = await Promise.all([getDashboardPostDrafts({ session })]);

    const posts = postsRequest.response.ok ? postsRequest.json : [];

    if (process.env.VITE_DEBUG) {
      console.log("drafts: ", posts);
    }

    return <DashboardDraftPostsContent posts={posts} />;
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);
  }
}
