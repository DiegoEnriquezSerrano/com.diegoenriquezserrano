"use server";

import PostService from "@/services/PostService";
import CategoryService from "@/services/CategoryService";
import DashboardEditPost from "./content";
import { getSessionCookie } from "@/utils/serverUtils";

const { getDashboardPost } = PostService.Api;
const { getDashboardCategories } = CategoryService.Api;

export default async function DashboardCategories({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const session = await getSessionCookie();

  try {
    const [categoriesRequest, postRequest] = await Promise.all([
      getDashboardCategories({ session }),
      getDashboardPost(slug, { session }),
    ]);

    const post = postRequest.response.ok ? postRequest.json : undefined;
    const categories = categoriesRequest.response.ok
      ? categoriesRequest.json
      : [];

    if (process.env.VITE_DEBUG) {
      console.log("categories: ", categories);
      console.log("post: ", post);
    }

    if (post) return <DashboardEditPost categories={categories} post={post} />;
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);
  }
}
