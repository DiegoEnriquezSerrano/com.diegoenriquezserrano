import { findApiTarget } from "@/utils/apiUtils";
import ApiService from "@/services/ApiService";
import ApiTypes from "@/types/ApiTypes";
import type { CategoryType } from "@/types/CategoryTypes";
import type {
  PostResponseType,
  PostsResponseType,
  PostType,
} from "@/types/PostTypes";
import type { UserType } from "@/types/UserTypes";

namespace PostService {
  export namespace Api {
    export async function getDashboardPosts(
      args: ApiTypes.V1.RequestArguments,
    ): Promise<PostsResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = { data: args.params };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.get<PostType[]>({
        base: findApiTarget(),
        path: "dashboard/posts",
        opts,
      });

      return { json, response };
    }

    export async function getDashboardPostDrafts(
      args: ApiTypes.V1.RequestArguments,
    ): Promise<PostsResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = { data: args.params };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.get<PostType[]>({
        base: findApiTarget(),
        path: "dashboard/post_drafts",
        opts,
      });

      return { json, response };
    }

    export async function getDashboardPost(
      slug: PostType["slug"],
      args: ApiTypes.V1.RequestArguments,
    ): Promise<PostResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.get<PostType>({
        base: findApiTarget(),
        path: `dashboard/posts/${slug}`,
        opts,
      });

      return { json, response };
    }

    export async function createDashboardPost(
      args: ApiTypes.V1.RequestArguments,
    ): Promise<PostResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.post<PostType>({
        base: findApiTarget(),
        path: `dashboard/posts`,
        opts,
      });

      return { json, response };
    }

    export async function updateDashboardPost(
      slug: PostType["slug"],
      args: ApiTypes.V1.RequestArguments,
    ): Promise<PostResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.put<PostType>({
        base: findApiTarget(),
        path: `dashboard/posts/${slug}`,
        opts,
      });

      return { json, response };
    }

    export async function destroyDashboardPost(
      slug: PostType["slug"],
      args: ApiTypes.V1.RequestArguments,
    ): Promise<{ json: PostType; response: Response }> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.del<PostType>({
        base: findApiTarget(),
        path: `dashboard/posts/${slug}`,
        opts,
      });

      return { json, response };
    }

    export async function getDashboardCategoryPosts(
      slugs: { category: CategoryType["slug"] },
      args: ApiTypes.V1.RequestArguments,
    ): Promise<PostsResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.get<PostType[]>({
        base: findApiTarget(),
        path: `dashboard/categories/${slugs.category}/posts`,
        opts,
      });

      return { json, response };
    }

    export async function getPostsByUsername(
      slugs: { username: UserType["username"] },
      args: ApiTypes.V1.RequestArguments,
    ): Promise<PostsResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      const { json, response } = await ApiService.V1.get<PostType[]>({
        base: findApiTarget(),
        path: `posts/${slugs.username}`,
        opts,
      });

      return { json, response };
    }

    export async function getPostsByCategoryAndUsername(
      slugs: { username: UserType["username"]; category: CategoryType["slug"] },
      args: ApiTypes.V1.RequestArguments,
    ): Promise<PostsResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      const { json, response } = await ApiService.V1.get<PostType[]>({
        base: findApiTarget(),
        path: `categories/${slugs.username}/${slugs.category}/posts`,
        opts,
      });

      return { json, response };
    }

    export async function getPostByUsernameAndSlug(
      slugs: { username: UserType["username"]; slug: PostType["slug"] },
      args: ApiTypes.V1.RequestArguments,
    ): Promise<PostResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      const { json, response } = await ApiService.V1.get<PostType>({
        base: findApiTarget(),
        path: `posts/${slugs.username}/${slugs.slug}`,
        opts,
      });

      return { json, response };
    }
  }
}

export default PostService;
