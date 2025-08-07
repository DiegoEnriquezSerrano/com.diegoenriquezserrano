import { findApiTarget } from "@/utils/apiUtils";
import ApiService from "@/services/ApiService";
import ProjectService from "@/services/ProjectService";

afterEach(jest.clearAllMocks);

describe("ProjectService.ts", () => {
  describe("getDashboardProjects", () => {
    it("sends get request to dashboard_projects_path api endpoint", () => {
      ProjectService.Api.getDashboardProjects({ session: "sessioncookie" });

      expect(ApiService.V1.get).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: "dashboard/projects",
        opts: {
          bearer: "sessioncookie",
        },
      });
    });
  });

  describe("getDashboardProject", () => {
    it("sends get request to projects_by_user_path api endpoint", () => {
      ProjectService.Api.getDashboardProject("project-slug", {
        session: "sessioncookie",
      });

      expect(ApiService.V1.get).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: `dashboard/projects/project-slug`,
        opts: {
          bearer: "sessioncookie",
        },
      });
    });
  });

  describe("createDashboardProject", () => {
    it("sends post request to dashboard projects path api endpoint", () => {
      ProjectService.Api.createDashboardProject({
        session: "cookie",
        params: {
          title: "create",
          body: "body",
        },
      });

      expect(ApiService.V1.post).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: `dashboard/projects`,
        opts: {
          bearer: "cookie",
          data: {
            title: "create",
            body: "body",
          },
        },
      });
    });
  });

  describe("updateDashboardProject", () => {
    it("sends put request to dashboard retrieve destroy comment path api endpoint", () => {
      ProjectService.Api.updateDashboardProject("project-slug", {
        session: "cookie",
        params: {
          body: "update",
        },
      });

      expect(ApiService.V1.put).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: `dashboard/projects/project-slug`,
        opts: {
          bearer: "cookie",
          data: {
            body: "update",
          },
        },
      });
    });
  });

  describe("destroyDashboardProject", () => {
    it("sends put request to dashboard retrieve destroy comment path api endpoint", () => {
      ProjectService.Api.destroyDashboardProject("project-slug", {
        session: "cookie",
      });

      expect(ApiService.V1.del).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: `dashboard/projects/project-slug`,
        opts: {
          bearer: "cookie",
        },
      });
    });
  });

  describe("getProjectsByUsername", () => {
    it("sends get request to projects_by_user_path api endpoint", () => {
      ProjectService.Api.getProjectsByUsername({ username: "slappy" }, {});

      expect(ApiService.V1.get).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: "projects/slappy",
        opts: {},
      });
    });
  });

  describe("getProjectByUsernameAndSlug", () => {
    it("sends get request to category detail path api endpoint", () => {
      ProjectService.Api.getProjectByUsernameAndSlug(
        { username: "slappy", slug: "jody" },
        {},
      );

      expect(ApiService.V1.get).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: "projects/slappy/jody",
        opts: {},
      });
    });
  });
});

jest.mock("@/services/ApiService", () => ({
  ...jest.requireActual("@/services/ApiService.ts"),
  V1: {
    get: jest.fn(() =>
      Promise.resolve({
        response: {
          ok: true,
        },
        json: [],
      }),
    ),
    put: jest.fn(() =>
      Promise.resolve({
        response: {
          ok: true,
        },
        json: [],
      }),
    ),
    del: jest.fn(() =>
      Promise.resolve({
        response: {
          ok: true,
        },
        json: [],
      }),
    ),
    post: jest.fn(() =>
      Promise.resolve({
        response: {
          ok: true,
        },
        json: [],
      }),
    ),
  },
}));
