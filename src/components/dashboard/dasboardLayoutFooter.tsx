import Link from "next/link";
import Icon from "@/components/icon";
import MenuToggle from "@/components/menuToggle";
import {NotificationBell} from "../notificationBell";
import {NotificationType} from "@/types/NotificationTypes";
import {classes} from "@/utils";

export default function DashboardLayoutFooter({
  notifications,
}: {
  notifications?: NotificationType[];
}) {
  return (
    <footer
      className={baseFooterClassName}
      id="basefooter"
      style={{
        boxShadow: "0 0 .5rem var(--color-black)",
        gridArea: "basefooter",
        zIndex: "+2",
      }}
    >
      <figure id="basefooter-logo" style={{gridArea: "basefooter-logo"}}>
        <MenuToggle />
      </figure>
      <div
        id="basefooter-links"
        className="grid full-width full-height"
        style={{gridArea: "basefooter-links"}}
      >
        <Link
          className="flex-row full-height full-width align-items-center justify-content-center text-color-cyan"
          href="/dashboard"
        >
          <Icon type="home" opts={{height: "1.75rem", width: "1.75rem"}} />
        </Link>
        <Link
          className="flex-row full-height full-width align-items-center justify-content-center text-color-cyan"
          href="/dashboard/profile"
        >
          <Icon type="profile" opts={{height: "1.75rem", width: "1.75rem"}} />
        </Link>
        <Link
          className="flex-row full-height full-width align-items-center justify-content-center text-color-cyan hide-650"
          href="/dashboard/projects"
        >
          <Icon type="projects" opts={{height: "1.75rem", width: "1.75rem"}} />
        </Link>
        <Link
          className="flex-row full-height full-width align-items-center justify-content-center text-color-cyan hide-650"
          href="/dashboard/posts"
        >
          <Icon type="article" opts={{height: "1.75rem", width: "1.75rem"}} />
        </Link>
        <Link
          className="flex-row full-height full-width align-items-center justify-content-center text-color-cyan hide-650"
          href="/dashboard/categories"
        >
          <Icon type="tags" opts={{height: "1.75rem", width: "1.75rem"}} />
        </Link>
        <Link
          href="/dashboard/notifications"
          className="flex-row full-height full-width align-items-center justify-content-center text-color-cyan"
        >
          <NotificationBell notifications={notifications} />
        </Link>
        <div className="flex-row full-height full-width align-items-center justify-content-center text-color-cyan show-650">
          <MenuToggle />
        </div>
      </div>
    </footer>
  );
}

const baseFooterClassName = classes([
  "align-items-center",
  "border-color-gray",
  "border-style-solid",
  "border-width-0",
  "full-height",
  "full-width",
  "gap-0",
  "grid",
]);
