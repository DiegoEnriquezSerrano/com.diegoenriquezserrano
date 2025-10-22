"use server";

// utils
import { getSessionCookie } from "@/utils/serverUtils";

// services
import UserService from "@/services/UserService";

// components
import DashboardProfileEditContent from "@/app/dashboard/profile/edit/content";

const { getDashboardProfile } = UserService.Api;

export default async function DashboardProfile() {
  const session = await getSessionCookie();

  try {
    const request = await getDashboardProfile({ session });

    if (request.response.ok) {
      const profile = request.json;

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
