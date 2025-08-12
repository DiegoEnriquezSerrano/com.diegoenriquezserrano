import { FeaturedPost } from "@/components/featuredPost";
import PostList from "@/components/postList";
import BaseLayoutPageWrapper from "@/components/baseLayoutPageWrapper";
import PostService from "@/services/PostService";
import UserService from "@/services/UserService";
import type { PostType } from "@/types/PostTypes";
import type { ProfileType } from "@/types/UserTypes";

const { getPostsByUsername } = PostService.Api;
const { getProfileByUsername } = UserService.Api;

export default async function Home() {
  const username = String(process.env.NEXT_PUBLIC_PRIMARY_USERNAME);

  let posts: PostType[] = [];
  let profile: ProfileType | undefined;

  try {
    const [postsRequest, profileRequest] = await Promise.all([
      getPostsByUsername({ username }, {}),
      getProfileByUsername({ username }, {}),
    ]);

    if (postsRequest.response.ok) posts = postsRequest.json;
    if (profileRequest.response.ok) profile = profileRequest.json;
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);

    posts = [];
    profile = undefined;
  }

  if (process.env.VITE_DEBUG) {
    console.log("posts: ", posts);
    console.log("profile: ", profile);
  }

  return (
    <BaseLayoutPageWrapper props={{ showCategories: true }}>
      <main
        className="display-flex flex-column gap-32 align-items-center stack-48 full-width"
        style={{ gridRowStart: 2 }}
      >
        <h2
          className="stack-16 drop-48 squeeze-16 flex-row justify-content-center full-width text-align-center line-height-extra-large"
          style={{ maxWidth: 800 }}
        >
          {profile?.description}
        </h2>
        <section
          className="squeeze-24 stack-32 flex-row justify-content-center align-items-start"
          style={{ maxWidth: 900 }}
        >
          <FeaturedPost post={posts.find((post) => post.featured)} />
        </section>
        <div className="full-width squeeze-24 stack-32 flex-row justify-content-center">
          <hr
            className="border-bottom-width-2 border-style-outset border-top-width-0 border-color-cyan flex-row full-width raised-2"
            style={{ height: 1, maxWidth: 800 }}
          />
        </div>
        <PostList posts={posts} />
      </main>
    </BaseLayoutPageWrapper>
  );
}
