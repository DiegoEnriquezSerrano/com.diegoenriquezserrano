"use client";

import { classes, getResponsiveClasses } from "@/utils";
import Link from "next/link";
import Icon from "./icon";
import { useMediaQuery } from "@/utils/clientUtils";
import type { CategoryType } from "@/types/CategoryTypes";

export default function CategoryRow(props: { category: CategoryType }) {
  const isBreakpoint = useMediaQuery(799);

  return (
    <Link
      key={props.category.slug}
      className={getResponsiveClassName(isBreakpoint)}
      href={`categories/${props.category.slug}`}
    >
      <div className="flex-column">
        <p className="text-color-cyan text-large dim-90 flash-100 transition-opacity-1">
          {props.category.name}
        </p>
        <p
          className="font-orbitron-light text-color-light dim-90 flash-100 transition-opacity-1"
          style={{ letterSpacing: ".05rem" }}
        >
          #{props.category.slug}
        </p>
      </div>
      <div className="flex-column">
        <div
          className="display-grid gap-4 text-color-cyan"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          <figure className="flex-row">
            <Icon
              type="article"
              opts={{ height: "1.25rem", width: "1.25rem" }}
            />
          </figure>
          <p className="flex-row full-width justify-content-center">
            {props.category.post_count}
          </p>
        </div>
        <p className="font-orbitron-light text-color-light">Posts</p>
      </div>
    </Link>
  );
}

const containerStylesArray = [
  "border-width-0",
  "border-bottom-width-1",
  "border-color-gray",
  "border-style-outset",
  "border-top-width-1",
  "flex-row",
  "full-width",
  "gap-48",
  "hover-decoration-none",
  "justify-content-space-between",
  "raised-2",
  "squeeze-24",
  "squish-24",
  "stack-24",
  "category-row",
];

const containerBreakpointStylesArray = ["border-width-1", "border-rounded-16"];

function getResponsiveClassName(reachedBreakpoint: boolean): string {
  return getResponsiveClasses(reachedBreakpoint, [
    containerStylesArray,
    containerBreakpointStylesArray,
  ]);
}
