"use server";

import { cookies } from "next/headers";
import CategoryService from "@/services/CategoryService";
import DashboardNewPost from "./content";

const { getDashboardCategories } = CategoryService.Api;

export default async function DashboardCategories() {
  const cookieStore = await cookies();
  const accessToken = process.env.VITE_JWT_COOKIE_NAME
    ? cookieStore.get(process.env.VITE_JWT_COOKIE_NAME)
    : null;

  try {
    const request = await getDashboardCategories({
      session: accessToken?.value,
    });

    if (request.response.ok) {
      const categories = request.json;

      if (process.env.VITE_DEBUG) {
        console.log("categories: ", categories);
      }

      return <DashboardNewPost categories={categories} />;
    }
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);
  }
}
