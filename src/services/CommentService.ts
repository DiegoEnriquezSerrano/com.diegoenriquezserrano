import { findApiTarget } from "@/utils/apiUtils";
import ApiService from "@/services/ApiService";
import ApiTypes from "@/types/ApiTypes";
import type { CommentType } from "@/types/CommentTypes";

namespace CommentService {
  export namespace Api {
    export async function getDashboardComments(
      args: ApiTypes.V1.RequestArguments,
    ): Promise<{ json: CommentType[]; response: Response }> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.get<CommentType[]>({
        base: findApiTarget(),
        path: `dashboard/comments`,
        opts,
      });

      return { json, response };
    }

    export async function getDashboardComment(
      id: CommentType["id"],
      args: ApiTypes.V1.RequestArguments,
    ): Promise<{ json: CommentType; response: Response }> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.get<CommentType>({
        base: findApiTarget(),
        path: `dashboard/comments/${id}`,
        opts,
      });

      return { json, response };
    }

    export async function updateDashboardComment(
      id: CommentType["id"],
      args: ApiTypes.V1.RequestArguments,
    ): Promise<{ json: CommentType; response: Response }> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.put<CommentType>({
        base: findApiTarget(),
        path: `dashboard/comments/${id}`,
        opts,
      });

      return { json, response };
    }

    export async function destroyDashboardComment(
      id: CommentType["id"],
      args: ApiTypes.V1.RequestArguments,
    ): Promise<{ json: CommentType; response: Response }> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.del<CommentType>({
        base: findApiTarget(),
        path: `dashboard/comments/${id}`,
        opts,
      });

      return { json, response };
    }
  }
}

export default CommentService;
