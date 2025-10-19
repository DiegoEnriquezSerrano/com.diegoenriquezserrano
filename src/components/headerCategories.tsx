import Link from "next/link";
import { classes } from "@/utils";
import Icon from "./icon";
import type { CategoryType } from "@/types/CategoryTypes";

export default function HeaderCategories(
  props: { categories: CategoryType[]; show: boolean } = {
    categories: [],
    show: false,
  },
) {
  if (props.show) {
    return (
      <section
        className={headerCategoriesClassName}
        style={{ top: 0, zIndex: "+2" }}
      >
        <figure className="flex-row align-items-center gap-4">
          <Icon type="tags" />
          <figcaption>Categories</figcaption>
        </figure>
        {props.categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="text-color-cyan"
          >
            {category.name}
          </Link>
        ))}
      </section>
    );
  }
}

const headerCategoriesClassName = classes([
  "position-sticky",
  "surface-char",
  "squish-16",
  "border-width-0",
  "border-bottom-width-2",
  "border-style-outset",
  "border-color-gray",
  "flex-row",
  "align-items-center",
  "gap-24",
  "overflow-x-auto",
  "squeeze-16",
]);
