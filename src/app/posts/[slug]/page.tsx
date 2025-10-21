// externals
import Link from "next/link";
import Markdown from "react-markdown";

// components
import BaseLayoutPageWrapper from "@/components/baseLayoutPageWrapper";
import Icon from "@/components/icon";

// services
import PostService from "@/services/PostService";

// types
import type { PostType } from "@/types/PostTypes";

export default async function PostsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post: PostType | undefined;

  const { getPostByUsernameAndSlug } = PostService.Api;

  try {
    const [postRequest] = await Promise.all([
      getPostByUsernameAndSlug(
        {
          username: String(process.env.NEXT_PUBLIC_PRIMARY_USERNAME),
          slug,
        },
        {},
      ),
    ]);

    if (postRequest.response.ok) post = postRequest.json;
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);
  }

  if (process.env.VITE_DEBUG) {
    console.log("posts: ", post);
  }

  return (
    <BaseLayoutPageWrapper props={{ showCategories: true }}>
      <div className="flex-row dim-70 text-color-white full-width drop-24 stack-24">
        <Link
          className="flex-row align-items-center gap-4 hover-decoration-none"
          href="/posts"
        >
          <figure className="transform-rotate-90">
            <Icon type="angle" />
          </figure>
          Posts
        </Link>
      </div>
      <main
        className="display-flex flex-column align-items-center full-width squish-0"
        style={{ gridRowStart: 2 }}
      >
        <h1 className="flex-row full-width justify-content-center stack-48 drop-0 text-extra-large line-height-extra-large align-items-center gap-8">
          {post?.title}
        </h1>
        <figure className="flex-row full-width squeeze-0 stack-48 justify-content-center">
          <img
            className="full-width"
            src={post?.cover_image_url}
            style={{ maxWidth: 1280 }}
          />
        </figure>
        <section
          className="markdown flex-column align-items-stretch justify-content-start full-width squeeze-24 white-space-pre-line line-height-large stack-64"
          style={{ maxWidth: 800 }}
        >
          <Markdown>{post?.body}</Markdown>
        </section>
      </main>
    </BaseLayoutPageWrapper>
  );
}
