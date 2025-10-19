"use server";

// externals
import { cookies } from "next/headers";

// services
import BookmarkService from "@/services/BookmarkService";

// components
import DashboardBookmarksContent from "./content";

// types
import type { BookmarkType } from "@/types/BookmarkTypes";

const { getDashboardBookmarks } = BookmarkService.Api;

export default async function DashboardCategories() {
  const cookieStore = await cookies();
  const accessToken = process.env.VITE_JWT_COOKIE_NAME
    ? cookieStore.get(process.env.VITE_JWT_COOKIE_NAME)
    : null;

  let bookmarks: BookmarkType[] = [];

  try {
    const request = await getDashboardBookmarks({
      session: accessToken?.value,
    });

    if (request.response.ok) bookmarks = request.json;
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);
  }

  if (process.env.VITE_DEBUG) {
    console.log("bookmarks: ", bookmarks);
  }

  return <DashboardBookmarksContent bookmarks={bookmarks} />;
}
