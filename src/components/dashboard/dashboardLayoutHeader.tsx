import Link from "next/link";
import { classes } from "@/utils";
import Icon from "@/components/icon";
import type { IconType, SvgProps } from "@/types/IconTypes";

export default function DashboardHeader({
  children,
  action,
}: {
  children: React.ReactNode;
  action?: {
    icon: IconType;
    href: string;
    svgClassName?: SvgProps["className"];
    label?: string;
  };
}) {
  return (
    <header
      className="grid surface-char full-width full-height justify-content-space-between align-items-center"
      style={{ gridArea: "baseheader", gridTemplateColumns: "1fr min-content" }}
      id="dashboard-header"
    >
      <div className={headerTitleClassName}>{children}</div>
      {typeof action != "undefined" ? (
        <div className="full-width flex-column justify-content-center align-items-center squeeze-16">
          <Link className={headerActionLinkClassName} href={action.href}>
            <Icon
              type={action.icon}
              opts={{
                svgClassName: action?.svgClassName,
                height: "1.25rem",
                width: "1.25rem",
              }}
            />
            {!!action.label && (
              <span className="text-small">{action.label}</span>
            )}
          </Link>
        </div>
      ) : (
        <div />
      )}
    </header>
  );
}

const headerTitleClassName = classes([
  "align-items-center",
  "flex-row",
  "font-weight-800",
  "full-height",
  "full-width",
  "justify-content-start",
  "justify-self-start",
  "letter-spacing-2",
  "squeeze-16",
]);

const headerActionLinkClassName = classes([
  "border-color-cyan",
  "border-rounded-24",
  "border-style-outset",
  "border-width-1",
  "align-items-center",
  "dim-80",
  "flash-100",
  "flex-row",
  "gap-8",
  "raised-1",
  "squeeze-16",
  "squish-8",
  "surface-cyan",
  "text-color-black",
]);
