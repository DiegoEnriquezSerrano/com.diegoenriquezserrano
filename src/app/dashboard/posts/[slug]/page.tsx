"use server";

import { cookies } from "next/headers";
import PostService from "@/services/PostService";
import DashboardPostContent from "./content";

const { getDashboardPost } = PostService.Api;

export default async function DashboardCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const cookieStore = await cookies();
  const accessToken = process.env.VITE_JWT_COOKIE_NAME
    ? cookieStore.get(process.env.VITE_JWT_COOKIE_NAME)
    : null;

  try {
    const [postRequest] = await Promise.all([
      getDashboardPost(slug, { session: accessToken?.value }),
    ]);

    if (postRequest.response.ok) {
      const post = postRequest.json;

      if (process.env.VITE_DEBUG) {
        console.log("post: ", post);
      }

      return <DashboardPostContent post={post} />;
    }
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);
  }
}
