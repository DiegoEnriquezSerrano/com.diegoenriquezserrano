import { findApiTarget } from "@/utils/apiUtils";
import ApiService from "@/services/ApiService";
import ApiTypes from "@/types/ApiTypes";
import type { NotificationType } from "@/types/NotificationTypes";

namespace NotificationService {
  export namespace Api {
    export async function getDashboardNotifications(
      args: ApiTypes.V1.RequestArguments,
    ): Promise<{ json: NotificationType[]; response: Response }> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.get<NotificationType[]>({
        base: findApiTarget(),
        path: `dashboard/notifications`,
        opts,
      });

      return { json, response };
    }

    export async function updateDashboardNotification(
      id: NotificationType["id"],
      args: ApiTypes.V1.RequestArguments,
    ): Promise<{ json: { message: string }; response: Response }> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.put<{ message: string }>({
        base: findApiTarget(),
        path: `dashboard/notifications/${id}`,
        opts,
      });

      return { json, response };
    }
  }
}

export default NotificationService;
