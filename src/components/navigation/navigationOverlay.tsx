import Link from "next/link";
import { navigate, toggleNav } from "@/utils/clientUtils";
import Icon from "@/components/icon";
import NavFooter from "@/components/navigation/navFooter";
import { XIcon } from "@/icons/x";
import type { IconType } from "@/types/IconTypes";
import type { CategoryType } from "@/types/CategoryTypes";
import type { ProfileType } from "@/types/UserTypes";

export default function NavigationOverlay(props: {
  links?: { path: string; label: string; icon: IconType }[];
  categories: CategoryType[];
  profile?: ProfileType;
}) {
  return (
    <div
      className="max-width-- width-view-90 height-view-100 position-fixed surface-char overflow-y-auto overflow-x-hidden border-width-0 border-right-width-1 border-style-outset border-color-gray raised-2 text-color-cyan"
      id="navigation-overlay"
      style={{
        zIndex: "+2",
        transition: "left 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
        gridArea: "navigation-overlay",
        ["--max-width" as string]: "350px",
      }}
    >
      <div className="align-items-start justify-content-start flash flex-column flex-item full-height">
        <div className="flex-row justify-content-end full-width">
          <button
            id="navigation-overlay-close-button"
            className="flex-row cursor-pointer surface-char border-width-0 squish-16 squeeze-16 cursor-pointer"
            onClick={toggleNav}
          >
            <XIcon
              color={"var(--color-cyan)"}
              height={"1.25rem"}
              width={"1.25rem"}
            />
          </button>
        </div>
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
        <hr className="stack-32" />
        <div
          className="full-height border-style-outset border-width-0 border-top-width-1 border-color-gray full-width"
          style={{ boxShadow: "0 0 .5rem var(--color-black)" }}
        >
          <NavFooter
            links={props.links}
            categories={props.categories}
            profile={props?.profile}
          />
        </div>
      </div>
    </div>
  );
}
