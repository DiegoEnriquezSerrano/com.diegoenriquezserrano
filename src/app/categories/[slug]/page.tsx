// externals
import Link from "next/link";

// components
import BaseLayoutPageWrapper from "@/components/baseLayoutPageWrapper";
import Icon from "@/components/icon";
import PostList from "@/components/postList";

// services
import CategoryService from "@/services/CategoryService";
import PostService from "@/services/PostService";

// types
import type { CategoryType } from "@/types/CategoryTypes";
import type { PostType } from "@/types/PostTypes";

const { getPostsByCategoryAndUsername } = PostService.Api;
const { getCategoryByUsernameAndSlug } = CategoryService.Api;

export default async function PostsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const username: string = process.env.NEXT_PUBLIC_PRIMARY_USERNAME || "";

  let posts: PostType[] = [];
  let category: CategoryType | undefined;

  try {
    const [postsRequest, categoryRequest] = await Promise.all([
      getPostsByCategoryAndUsername({ username, category: slug }, {}),
      getCategoryByUsernameAndSlug({ username, slug }, {}),
    ]);

    if (postsRequest.response.ok) posts = postsRequest.json;
    if (categoryRequest.response.ok) category = categoryRequest.json;
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);
  }

  if (process.env.VITE_DEBUG) {
    console.log("posts: ", posts);
    console.log("category: ", category);
  }

  return (
    <BaseLayoutPageWrapper props={{ showCategories: true }}>
      <div className="flex-row dim-70 text-color-white full-width drop-24 stack-24">
        <Link
          className="flex-row align-items-center gap-4 hover-decoration-none"
          href="/categories"
        >
          <figure className="transform-rotate-90">
            <Icon type="angle" />
          </figure>
          Categories
        </Link>
      </div>
      <main
        className="display-flex flex-column align-items-center full-width squish-0"
        style={{ gridRowStart: 2 }}
      >
        <h1 className="flex-row full-width justify-content-center stack-32 drop-0 text-extra-large line-height-extra-large align-items-center gap-8">
          <Icon type="tags" opts={{ height: "1.5rem", width: "1.5rem" }} />
          <span>{category?.name}</span>
        </h1>
        {posts.length ? (
          <PostList posts={posts} />
        ) : (
          <section className="flex-column align-items-center justify-content-start full-width squeeze-16 stack-64">
            <div className="text-large flex-column justify-content-center text-color-white dim-90">
              <p className="stack-16 text-align-center">
                Hmm... no posts here yet.
              </p>
              <p className="text-align-center">Check again soon!</p>
            </div>
          </section>
        )}
      </main>
    </BaseLayoutPageWrapper>
  );
}
