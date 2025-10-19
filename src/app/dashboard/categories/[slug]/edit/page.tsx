"use server";

// externals
import { cookies } from "next/headers";

// services
import CategoryService from "@/services/CategoryService";

// components
import DashboardEditCategory from "./content";

// types
import type { CategoryType } from "@/types/CategoryTypes";

const { getDashboardCategory } = CategoryService.Api;

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

  try {
    const [categoryRequest] = await Promise.all([
      getDashboardCategory({ slug }, { session: accessToken?.value }),
    ]);

    if (categoryRequest.response.ok) category = categoryRequest.json;

    if (process.env.VITE_DEBUG) {
      console.log("category: ", category);
    }

    if (category) return <DashboardEditCategory category={category} />;
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);
  }
}
