"use server";

// externals
import { cookies } from "next/headers";

// components
import DashboardNewCategory from "./content";

export default async function DashboardCategories() {
  const cookieStore = await cookies();
  const accessToken = process.env.VITE_JWT_COOKIE_NAME
    ? cookieStore.get(process.env.VITE_JWT_COOKIE_NAME)
    : null;

  return <DashboardNewCategory />;
}
