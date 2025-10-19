"use server";

// externals
import { cookies } from "next/headers";

// services
import CommentService from "@/services/CommentService";

// components
import DashboardCommentsContent from "./content";

// types
import type { CommentType } from "@/types/CommentTypes";

const { getDashboardComments } = CommentService.Api;

export default async function DashboardComments() {
  const cookieStore = await cookies();
  const accessToken = process.env.VITE_JWT_COOKIE_NAME
    ? cookieStore.get(process.env.VITE_JWT_COOKIE_NAME)
    : null;

  let comments: CommentType[] = [];

  try {
    const request = await getDashboardComments({ session: accessToken?.value });

    if (request.response.ok) comments = request.json;
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);
  }

  if (process.env.VITE_DEBUG) {
    console.log("comments: ", comments);
  }

  return <DashboardCommentsContent comments={comments} />;
}
