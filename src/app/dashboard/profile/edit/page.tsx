"use server";

// externals
import { cookies } from "next/headers";

// services
import UserService from "@/services/UserService";

// components
import DashboardProfileEditContent from "@/app/dashboard/profile/edit/content";

// types
import type { ProfileType } from "@/types/UserTypes";

const { getDashboardProfile } = UserService.Api;

export default async function DashboardProfile() {
  const cookieStore = await cookies();
  const accessToken = process.env.VITE_JWT_COOKIE_NAME
    ? cookieStore.get(process.env.VITE_JWT_COOKIE_NAME)
    : null;

  let profile: ProfileType;

  console.log("at profile dit");
  try {
    const request = await getDashboardProfile({ session: accessToken?.value });

    if (request.response.ok) {
      profile = request.json;

      if (process.env.VITE_DEBUG) {
        console.log("profile: ", profile);
      }

      return <DashboardProfileEditContent profile={profile} />;
    }
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);

    return <div></div>;
  }
}
