import Link from "next/link";
import CategoryPillStyles from "./styleSets/categoryPillStyles";
import type { CategoryType } from "@/types/CategoryTypes";

export function CategoryPill(props: {
  category: CategoryType;
  dashboard: boolean;
}) {
  return (
    <Link
      className={CategoryPillStyles.spanClasses}
      href={`/categories/${props.category.slug}`}
      key={props.category.id}
    >
      {props.category.name}
    </Link>
  );
}
