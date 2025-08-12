import { findApiTarget } from "@/utils/apiUtils";
import ApiService from "@/services/ApiService";
import ApiTypes from "@/types/ApiTypes";

namespace SubscriptionService {
  export namespace Api {
    export async function attemptCreateSubscription(
      args: ApiTypes.V1.RequestArguments,
    ): Promise<{ json: { message: string }; response: Response }> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
        credentials: "omit",
      };

      const { json, response } = await ApiService.V1.post<{ message: string }>({
        base: findApiTarget(),
        path: `subscribe/${process.env.NEXT_PUBLIC_PRIMARY_USERNAME}`,
        opts,
      });

      return { json, response };
    }

    export async function attemptConfirmSubscription(
      token: string,
      args: ApiTypes.V1.RequestArguments,
    ): Promise<{ json: { message: string }; response: Response }> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
        credentials: "omit",
      };

      const { json, response } = await ApiService.V1.put<{ message: string }>({
        base: findApiTarget(),
        path: `subscription/confirmation/${token}`,
        opts,
      });

      return { json, response };
    }
  }
}

export default SubscriptionService;
