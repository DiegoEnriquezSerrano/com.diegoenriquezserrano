import { findApiTarget } from "@/utils/apiUtils";
import ApiService from "@/services/ApiService";
import ApiTypes from "@/types/ApiTypes";
import type {
  BookmarksResponseType,
  BookmarkType,
} from "@/types/BookmarkTypes";

namespace BookmarkService {
  export namespace Api {
    export async function getDashboardBookmarks(
      args: ApiTypes.V1.RequestArguments,
    ): Promise<BookmarksResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.get<BookmarkType[]>({
        base: findApiTarget(),
        path: `dashboard/bookmarks`,
        opts,
      });

      return { json, response };
    }
  }
}

export default BookmarkService;
