import { PostCard } from "./postCard";
import type { PostType } from "@/types/PostTypes";

export default function PostList(
  props: { posts?: PostType[]; dashboard?: boolean } = {
    posts: undefined,
    dashboard: false,
  },
) {
  return (
    <section className="grid squeeze-24 posts-list gap-24 full-width align-content-space-between">
      {props.posts?.map((post) => (
        <PostCard key={post.slug} post={post} dashboard={props.dashboard} />
      ))}
    </section>
  );
}
