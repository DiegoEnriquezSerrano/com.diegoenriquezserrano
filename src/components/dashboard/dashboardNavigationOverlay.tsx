import Link from "next/link";
import { navigate, toggleNav } from "@/utils/clientUtils";
import { classes } from "@/utils";
import Icon from "@/components/icon";
import { XIcon } from "@/icons/x";
import type { IconType } from "@/types/IconTypes";
import type { CategoryType } from "@/types/CategoryTypes";
import type { ProfileType } from "@/types/UserTypes";

export default function DashboardNavigationOverlay(props: {
  links?: { path: string; label: string; icon: IconType }[];
  categories: CategoryType[];
  profile?: ProfileType;
}) {
  return (
    <div
      className={containerClassName}
      id="navigation-overlay"
      style={{
        zIndex: "+2",
        transition: "left 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
        gridArea: "navivation-overlay",
        ["--max-width" as string]: "350px",
      }}
    >
      <div className="align-items-start justify-content-start flash flex-column flex-item full-height">
        <div
          className="flex-row justify-content-end full-width surface-char"
          style={{ zIndex: "+1" }}
        >
          <button
            id="navigation-overlay-close-button"
            className={closeButtonClassName}
            onClick={toggleNav}
          >
            <XIcon
              color={"var(--color-cyan)"}
              height={"1.25rem"}
              width={"1.25rem"}
            />
          </button>
        </div>
        <section className={userSectionClassName}>
          <figure className={imageContainerClassName}>
            <img
              className={imageClassName}
              src={String(props?.profile?.image)}
              style={{ height: 75, width: 75 }}
            />
          </figure>
          <p className="full-width flex-row align-items-center justify-content-start squeeze-16 stack-24">
            @{props?.profile?.username}
          </p>
        </section>
        <section className="full-width squish-16">
          {props?.links?.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="flex-row gap-24 squish-16 squeeze-16 full-width stack-16 letter-spacing-2"
              onClick={navigate}
            >
              <Icon
                type={link.icon}
                opts={{ height: "1.75rem", width: "1.75rem" }}
              />
              <p className="flex align-items-center">{link.label}</p>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}

const imageClassName = classes([
  "border-rounded-circle",
  "border-style-outset",
  "border-width-1",
  "overflow-hidden",
]);

const imageContainerClassName = classes([
  "align-items-center",
  "flex-row",
  "full-with",
  "justify-content-start",
  "squeeze-16",
  "stack-8",
]);

const userSectionClassName = classes([
  "border-width-0",
  "border-bottom-width-1",
  "border-color-gray",
  "border-style-outset",
  "full-width",
  "raised-1",
]);

const closeButtonClassName = classes([
  "border-width-0",
  "cursor-pointer",
  "cursor-pointer",
  "flex-row",
  "squeeze-16",
  "squish-16",
  "surface-char",
]);

const containerClassName = classes([
  "border-width-0",
  "border-color-gray",
  "border-right-width-1",
  "border-style-outset",
  "height-view-100",
  "max-width--",
  "overflow-x-hidden",
  "overflow-y-auto",
  "position-fixed",
  "raised-2",
  "surface-char",
  "text-color-cyan",
  "width-view-90",
]);
