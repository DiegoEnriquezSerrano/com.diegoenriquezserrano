import { findApiTarget } from "@/utils/apiUtils";
import ApiService from "@/services/ApiService";
import ApiTypes from "@/types/ApiTypes";
import type {
  CreateProjectParams,
  ProjectFormValues,
  ProjectResponseType,
  ProjectsResponseType,
  ProjectType,
} from "@/types/ProjectTypes";
import type { UserType } from "@/types/UserTypes";

namespace ProjectService {
  export namespace Api {
    export async function getDashboardProjects(
      args: ApiTypes.V1.RequestArguments,
    ): Promise<ProjectsResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = { data: args.params };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.get<ProjectType[]>({
        base: findApiTarget(),
        path: "dashboard/projects",
        opts,
      });

      return { json, response };
    }

    export async function getDashboardProject(
      slug: string,
      args: ApiTypes.V1.RequestArguments,
    ): Promise<ProjectResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.get<ProjectType>({
        base: findApiTarget(),
        path: `dashboard/projects/${slug}`,
        opts,
      });

      return { json, response };
    }

    export async function createDashboardProject(
      args: ApiTypes.V1.RequestArguments,
    ): Promise<ProjectResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.post<ProjectType>({
        base: findApiTarget(),
        path: `dashboard/projects`,
        opts,
      });

      return { json, response };
    }

    export async function updateDashboardProject(
      slug: string,
      args: ApiTypes.V1.RequestArguments,
    ): Promise<ProjectResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.put<ProjectType>({
        base: findApiTarget(),
        path: `dashboard/projects/${slug}`,
        opts,
      });

      return { json, response };
    }

    export async function destroyDashboardProject(
      slug: string,
      args: ApiTypes.V1.RequestArguments,
    ): Promise<{ json: ProjectType; response: Response }> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      if (args.session) opts.bearer = args.session;

      const { json, response } = await ApiService.V1.del<ProjectType>({
        base: findApiTarget(),
        path: `dashboard/projects/${slug}`,
        opts,
      });

      return { json, response };
    }

    export async function getProjectsByUsername(
      slugs: { username: UserType["username"] },
      args: ApiTypes.V1.RequestArguments,
    ): Promise<ProjectsResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };
      const { json, response } = await ApiService.V1.get<ProjectType[]>({
        base: findApiTarget(),
        path: `projects/${slugs.username}`,
        opts,
      });

      return { json, response };
    }

    export async function getProjectByUsernameAndSlug(
      slugs: { username: UserType["username"]; slug: ProjectType["slug"] },
      args: ApiTypes.V1.RequestArguments,
    ): Promise<ProjectResponseType> {
      const opts: ApiTypes.V1.RequestParams["opts"] = {
        data: args?.params || undefined,
      };

      const { json, response } = await ApiService.V1.get<ProjectType>({
        base: findApiTarget(),
        path: `projects/${slugs.username}/${slugs.slug}`,
        opts,
      });

      return { json, response };
    }

    export function prepareCreateParams(
      params: ProjectFormValues,
    ): CreateProjectParams {
      const finishedAt = !!params.finishedAt
        ? new Date(params.finishedAt).toISOString()
        : null;

      const startedAt = new Date(params.startedAt).toISOString();
      const tools = params.tools?.split(",").filter(Boolean);

      return {
        body: params.body,
        cover_image_url: params.coverImageUrl,
        description: params.description,
        finished_at: finishedAt,
        started_at: startedAt,
        status: params.status,
        title: params.title,
        tools,
        url: params.url,
      };
    }
  }

  export function getInitialFormValues(project: ProjectType) {
    const initFinishedAt = project.finished_at.substring(0, 10);
    const initStartedAt = project.started_at.substring(0, 10);
    const initTools = project.tools.join(",");

    return { initFinishedAt, initStartedAt, initTools };
  }
}

export default ProjectService;
