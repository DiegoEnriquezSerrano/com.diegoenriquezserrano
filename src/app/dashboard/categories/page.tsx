"use server";

// externals
import { cookies } from "next/headers";

// services
import CategoryService from "@/services/CategoryService";

// components
import DashboardCategoriesContent from "./content";

// types
import type { CategoryType } from "@/types/CategoryTypes";

const { getDashboardCategories } = CategoryService.Api;

export default async function DashboardCategories() {
  const cookieStore = await cookies();
  const accessToken = process.env.VITE_JWT_COOKIE_NAME
    ? cookieStore.get(process.env.VITE_JWT_COOKIE_NAME)
    : null;

  let categories: CategoryType[] = [];

  try {
    const request = await getDashboardCategories({
      session: accessToken?.value,
    });

    if (request.response.ok) categories = request.json;
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);
  }

  if (process.env.VITE_DEBUG) {
    console.log("categories: ", categories);
  }

  return <DashboardCategoriesContent categories={categories} />;
}
