"use server";

// externals
import { cookies } from "next/headers";

// services
import CategoryService from "@/services/CategoryService";
import PostService from "@/services/PostService";

// components
import DashboardCategoryContent from "./content";

// types
import type { CategoryType } from "@/types/CategoryTypes";
import type { PostType } from "@/types/PostTypes";

const { getDashboardCategory } = CategoryService.Api;
const { getDashboardCategoryPosts } = PostService.Api;

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

  let category: CategoryType | undefined = undefined;
  let posts: PostType[] = [];

  try {
    const [categoryRequest, postsRequest] = await Promise.all([
      getDashboardCategory({ slug }, { session: accessToken?.value }),
      getDashboardCategoryPosts(
        { category: slug },
        { session: accessToken?.value },
      ),
    ]);

    if (categoryRequest.response.ok) category = categoryRequest.json;
    if (postsRequest.response.ok) posts = postsRequest.json;

    if (process.env.VITE_DEBUG) {
      console.log("category: ", category);
    }

    if (posts && category)
      return <DashboardCategoryContent category={category} posts={posts} />;
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);
  }
}
