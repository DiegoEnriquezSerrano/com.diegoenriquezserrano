"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { classes } from "@/utils";
import PostService from "@/services/PostService";
import type { PostType } from "@/types/PostTypes";

type PostCreateFormProps = { post: PostType };

const { patchDashboardPost } = PostService.Api;

export default function DraftHeader({ post }: PostCreateFormProps) {
  const router = useRouter();

  async function attemptPublish(event: React.MouseEvent): Promise<void> {
    event.preventDefault();

    const params = { draft: false };
    const request = await patchDashboardPost(post.slug, { params });

    if (request.response.ok) {
      if (process.env.VITE_DEBUG) {
        console.log("post: ", request.response);
      }

      router.push(`/dashboard/posts`);
    }
  }

  return (
    <>
      {post.draft && (
        <section className="flex-row full-width justify-content-space-between align-items-center squeeze-16 squish-16">
          <span>Draft</span>
          <button
            onClick={attemptPublish}
            className={classes([
              "border-color-cyan",
              "border-rounded-24",
              "border-style-outset",
              "border-width-1",
              "cursor-pointer",
              "dim-80",
              "flash-100",
              "flex-row",
              "raised-1",
              "squeeze-16",
              "squish-8",
              "stack-8",
              "surface-cyan",
              "text-color-black",
            ])}
          >
            Publish
          </button>
        </section>
      )}
    </>
  );
}
