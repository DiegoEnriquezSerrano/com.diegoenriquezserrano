"use client";

import Link from "next/link";
import {classes} from "@/utils";
import {CategoryPill} from "./categoryPill";
import type {PostType} from "@/types/PostTypes";

export function PostCard(
  props: {post?: PostType; dashboard?: boolean} = {
    post: undefined,
    dashboard: false,
  }
) {
  const postLink = props.dashboard
    ? `/dashboard/posts/${props.post?.slug}`
    : `/posts/${props.post?.slug}`;

  if (props.post) {
    return (
      <div className={headerClassName2}>
        <Link
          href={postLink}
          className="flex-item full-width border-rounded-24 overflow-hidden stack-16"
        >
          <img src={props.post.cover_image_url} className="full-width" />
        </Link>
        <div className="flex-column gap-16 squish-16">
          <Link
            className="line-height-extra-large text-extra-large stack-8 hover-decoration-none font-weight-400"
            href={postLink}
          >
            {props.post.title}
          </Link>
          <Link
            className="line-height-large stack-8 hover-decoration-none font-weight-400"
            href={postLink}
          >
            {props.post.excerpt}
          </Link>
          <div className="flex-row gap-8 full-width flex-item">
            {props.post.categories.map((category) => (
              <CategoryPill
                key={category.id}
                category={category}
                dashboard={props.dashboard || false}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const headerClassName2 = classes([
  "border-color-turquoise",
  "border-rounded-32",
  "border-style-outset",
  "border-style-solid",
  "border-width-1",
  "flex-column",
  "full-width",
  "justify-content-space-between",
  "overflow-hidden",
  "raised-2",
  "squeeze-24",
  "squish-24",
  "surface-featured-post",
  // "flex-item",
  "post-card",
]);
