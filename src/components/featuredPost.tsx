"use client";

import { classes } from "@/utils";
import type { PostType } from "@/types/PostTypes";

export function FeaturedPost(props: { post?: PostType }) {
  if (props.post) {
    return (
      <div className={containerClassName}>
        <img
          src={props.post.cover_image_url}
          className="flex-item full-width border-rounded-24 overflow-hidden"
        />
        <div className={ulClassName}>
          <div className="stack-8">
            {props.post.categories.map((category) => (
              <span
                className="display-inline-block text-small text-color-turquoise"
                key={category.id}
              >
                <a href={`/categories/${category.slug}`}>{category.name}</a>
              </span>
            ))}
          </div>
          <p className="text-extra-large stack-8">{props.post.title}</p>
          <p className="line-height-extra-large">{props.post.excerpt}</p>
        </div>
      </div>
    );
  }
}

const containerClassName = classes([
  "surface-featured-post",
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
  "squeeze-32",
  "squish-32",
]);

const ulClassName = "flex-column gap-16 squish-24 squeeze-32 flex-item";
