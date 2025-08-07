import { findApiTarget } from "@/utils/apiUtils";
import ApiService from "@/services/ApiService";
import ApiTypes from "@/types/ApiTypes";
import type {
  CategoriesResponseType,
  CategoryResponseType,
  CategoryType,
} from "@/types/CategoryTypes";
import type { UserType } from "@/types/UserTypes";

namespace CategoryService {
  export namespace Api {
    export async function getDashboardCategories(
      args: ApiTypes.V1.RequestArguments,
    ): Promise<CategoriesResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = { data: args.params };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.get<CategoryType[]>({
        base: findApiTarget(),
        path: "dashboard/categories",
        opts,
      });

      return { json, response };
    }

    export async function createDashboardCategory(
      args: ApiTypes.V1.RequestArguments,
    ): Promise<CategoryResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.post<CategoryType>({
        base: findApiTarget(),
        path: `dashboard/categories`,
        opts,
      });

      return { json, response };
    }

    export async function getDashboardCategory(
      slugs: { slug: CategoryType["slug"] },
      args: ApiTypes.V1.RequestArguments,
    ): Promise<CategoryResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.get<CategoryType>({
        base: findApiTarget(),
        path: `dashboard/categories/${slugs.slug}`,
        opts,
      });

      return { json, response };
    }

    export async function updateDashboardCategory(
      slugs: { slug: CategoryType["slug"] },
      args: ApiTypes.V1.RequestArguments,
    ): Promise<CategoryResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.put<CategoryType>({
        base: findApiTarget(),
        path: `dashboard/categories/${slugs.slug}`,
        opts,
      });

      return { json, response };
    }

    export async function destroyDashboardCategory(
      slugs: { slug: CategoryType["slug"] },
      args: ApiTypes.V1.RequestArguments,
    ): Promise<{ json: CategoryType; response: Response }> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.del<CategoryType>({
        base: findApiTarget(),
        path: `dashboard/categories/${slugs.slug}`,
        opts,
      });

      return { json, response };
    }

    export async function getCategories(
      args: ApiTypes.V1.RequestArguments,
    ): Promise<CategoriesResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      const { json, response } = await ApiService.V1.get<CategoryType[]>({
        base: findApiTarget(),
        path: `categories`,
        opts,
      });

      return { json, response };
    }

    export async function getCategoriesByUsername(
      slugs: { username: UserType["username"] },
      args: ApiTypes.V1.RequestArguments,
    ): Promise<CategoriesResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      const { json, response } = await ApiService.V1.get<CategoryType[]>({
        base: findApiTarget(),
        path: `categories/${slugs.username}`,
        opts,
      });

      return { json, response };
    }

    export async function getCategoryByUsernameAndSlug(
      slugs: { username: UserType["username"]; slug: CategoryType["slug"] },
      args: ApiTypes.V1.RequestArguments,
    ): Promise<CategoryResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      const { json, response } = await ApiService.V1.get<CategoryType>({
        base: findApiTarget(),
        path: `categories/${slugs.username}/${slugs.slug}`,
        opts,
      });

      return { json, response };
    }
  }
}

export default CategoryService;
