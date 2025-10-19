"use server";

// utils
import { getSessionCookie } from "@/utils/serverUtils";

// components
import DashboardNewPost from "./content";

export default async function DashboardCategories() {
  getSessionCookie();

  return <DashboardNewPost />;
}
