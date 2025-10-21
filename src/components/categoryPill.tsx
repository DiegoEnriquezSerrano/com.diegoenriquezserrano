import Link from "next/link";
import { classes } from "@/utils";
import type { CategoryType } from "@/types/CategoryTypes";

export function CategoryPill(props: {
  category: CategoryType;
  dashboard: boolean;
}) {
  let href = props.dashboard
    ? `/dashboard/categories/${props.category.slug}`
    : `/categories/${props.category.slug}`;
  return (
    <Link
      className={classes([
        "align-self-end",
        "border-color-cyan-semi-transparent",
        "border-rounded-16",
        "border-style-solid",
        "border-width-1",
        "display-inline-block",
        "hover-decoration-none",
        "squeeze-16",
        "squish-8",
        "surface-char-semi-transparent",
        "text-color-turquoise",
        "text-small",
      ])}
      href={href}
      key={props.category.id}
    >
      {props.category.name}
    </Link>
  );
}
