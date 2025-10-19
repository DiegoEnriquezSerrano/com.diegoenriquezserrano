// components
import BaseLayoutPageWrapper from "@/components/baseLayoutPageWrapper";
import Icon from "@/components/icon";
import PostList from "@/components/postList";

// services
import PostService from "@/services/PostService";

// types
import type { PostType } from "@/types/PostTypes";

const { getPostsByUsername } = PostService.Api;

export default async function PostsPage() {
  let posts: PostType[] = [];

  try {
    const [postsRequest] = await Promise.all([
      getPostsByUsername(
        { username: String(process.env.NEXT_PUBLIC_PRIMARY_USERNAME) },
        {},
      ),
    ]);

    if (postsRequest.response.ok) posts = postsRequest.json;
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);

    posts = [];
  }

  if (process.env.VITE_DEBUG) {
    console.log("posts: ", posts);
  }

  return (
    <BaseLayoutPageWrapper props={{ showCategories: true }}>
      <main
        className="display-flex flex-column align-items-center full-width squish-48"
        style={{ gridRowStart: 2 }}
      >
        <h1 className="flex-row full-width justify-content-center stack-48 drop-0 text-extra-large line-height-extra-large align-items-center gap-8">
          <Icon type="article" opts={{ height: "1.5rem", width: "1.5rem" }} />
          Posts
        </h1>
        <PostList posts={posts} />
      </main>
    </BaseLayoutPageWrapper>
  );
}
