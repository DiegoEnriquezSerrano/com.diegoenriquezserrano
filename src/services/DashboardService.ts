import { findApiTarget } from "@/utils/apiUtils";
import ApiService from "@/services/ApiService";
import ApiTypes from "@/types/ApiTypes";
import type { AuthorStats } from "@/types/AuthorTypes";

namespace DashboardService {
  export namespace Api {
    export async function getDashboardStats(
      args: ApiTypes.V1.RequestArguments,
    ): Promise<{ json: AuthorStats; response: Response }> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.get<AuthorStats>({
        base: findApiTarget(),
        path: `dashboard/stats`,
        opts,
      });

      return { json, response };
    }
  }
}

export default DashboardService;
