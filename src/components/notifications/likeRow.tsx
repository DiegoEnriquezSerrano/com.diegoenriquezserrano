"use client";

import { NotificationType } from "@/types/NotificationTypes";
import Link from "next/link";

export default function LikeRow({
  notification,
}: {
  notification: NotificationType;
}) {
  return (
    <div className="flex-row full-width border-width-0 border-bottom-width-1 border-color-gray border-style-outset squish-16 squeeze-16 align-items-center gap-16">
      <div className="flex-row stack-8">
        <figure
          style={{ height: 50, width: 50 }}
          className="border-rounded-circle overflow-hidden border-style-outset border-color-cyan border-width-2"
        >
          <Link href={`/@/${notification.profile.username}`}>
            <img src={`${notification.profile.image}`} />
          </Link>
        </figure>
      </div>
      <p className="display-inline-block text-small text-color-light stack-8">
        <Link href={`/@/${notification.profile.username}`}>
          {notification.profile.username}
        </Link>
        <span>&nbsp;liked your post&nbsp;</span>
        <Link
          href={`/@/${notification.post.profile.username}/posts/${notification.post.slug}`}
        >
          "{notification.post.title}"
        </Link>
      </p>
    </div>
  );
}
