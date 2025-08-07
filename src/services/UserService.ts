import { findApiTarget } from "@/utils/apiUtils";
import ApiService from "@/services/ApiService";
import ApiTypes from "@/types/ApiTypes";
import type { ProfileType, UserType } from "@/types/UserTypes";

namespace UserService {
  export namespace Api {
    export async function getProfileByUsername(
      slugs: { username: UserType["username"] },
      args: ApiTypes.V1.RequestArguments,
    ): Promise<{ json: ProfileType; response: Response }> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      const { json, response } = await ApiService.V1.get<ProfileType>({
        base: findApiTarget(),
        path: `user/profile/${slugs.username}`,
        opts,
      });

      return { json, response };
    }

    export async function getDashboardProfile(
      args: ApiTypes.V1.RequestArguments,
    ): Promise<{ json: ProfileType; response: Response }> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.get<ProfileType>({
        base: findApiTarget(),
        path: `dashboard/profile`,
        opts,
      });

      return { json, response };
    }

    export async function submitLogin(
      args: ApiTypes.V1.RequestArguments,
    ): Promise<{ json: { message: string }; response: Response }> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      const { json, response } = await ApiService.V1.post<{ message: string }>({
        base: findApiTarget(),
        path: `user/token`,
        opts,
      });

      return { json, response };
    }
  }
}

export default UserService;
