"use server";

// externals
import { cookies } from "next/headers";

// services
import NotificationService from "@/services/NotificationService";

// components
import DashboardNotificationContent from "./content";

// types
import type { NotificationType } from "@/types/NotificationTypes";

const { getDashboardNotifications } = NotificationService.Api;

export default async function DashboardCategories() {
  const cookieStore = await cookies();
  const accessToken = process.env.VITE_JWT_COOKIE_NAME
    ? cookieStore.get(process.env.VITE_JWT_COOKIE_NAME)
    : null;

  let notifications: NotificationType[] = [];

  try {
    const request = await getDashboardNotifications({
      session: accessToken?.value,
    });

    if (request.response.ok) notifications = request.json;
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);
  }

  if (process.env.VITE_DEBUG) {
    console.log("notifications: ", notifications);
  }

  return <DashboardNotificationContent notifications={notifications} />;
}
