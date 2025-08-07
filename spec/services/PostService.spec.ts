import { findApiTarget } from "@/utils/apiUtils";
import ApiService from "@/services/ApiService";
import PostService from "@/services/PostService";

afterEach(jest.clearAllMocks);

describe("PostService.ts", () => {
  describe("getDashboardPosts", () => {
    it("sends get request to dashboard_posts_path api endpoint", () => {
      PostService.Api.getDashboardPosts({ session: "sessioncookie" });

      expect(ApiService.V1.get).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: "dashboard/posts",
        opts: {
          bearer: "sessioncookie",
        },
      });
    });
  });

  describe("getDashboardPost", () => {
    it("sends get request to posts_by_user_path api endpoint", () => {
      PostService.Api.getDashboardPost("mypost", { session: "sessioncookie" });

      expect(ApiService.V1.get).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: `dashboard/posts/mypost`,
        opts: {
          bearer: "sessioncookie",
        },
      });
    });
  });

  describe("createDashboardPost", () => {
    it("sends post request to dashboard posts path api endpoint", () => {
      PostService.Api.createDashboardPost({
        session: "cookie",
        params: {
          title: "create",
          body: "body",
        },
      });

      expect(ApiService.V1.post).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: `dashboard/posts`,
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

  describe("updateDashboardPost", () => {
    it("sends put request to dashboard retrieve destroy comment path api endpoint", () => {
      PostService.Api.updateDashboardPost("mypost", {
        session: "cookie",
        params: {
          body: "update",
        },
      });

      expect(ApiService.V1.put).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: `dashboard/posts/mypost`,
        opts: {
          bearer: "cookie",
          data: {
            body: "update",
          },
        },
      });
    });
  });

  describe("destroyDashboardPost", () => {
    it("sends put request to dashboard retrieve destroy comment path api endpoint", () => {
      PostService.Api.destroyDashboardPost("mypost", {
        session: "cookie",
      });

      expect(ApiService.V1.del).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: `dashboard/posts/mypost`,
        opts: {
          bearer: "cookie",
        },
      });
    });
  });

  describe("getPostsByUsername", () => {
    it("sends get request to posts_by_user_path api endpoint", () => {
      PostService.Api.getPostsByUsername({ username: "slappy" }, {});

      expect(ApiService.V1.get).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: "posts/slappy",
        opts: {},
      });
    });
  });

  describe("getPostsByCategoryAndUsername", () => {
    it("sends get request to category_posts_path api endpoint", () => {
      PostService.Api.getPostsByCategoryAndUsername(
        { username: "slappy", category: "jody" },
        {},
      );

      expect(ApiService.V1.get).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: "categories/slappy/jody/posts",
        opts: {},
      });
    });
  });

  describe("getPostByUsernameAndSlug", () => {
    it("sends get request to category detail path api endpoint", () => {
      PostService.Api.getPostByUsernameAndSlug(
        { username: "slappy", slug: "jody" },
        {},
      );

      expect(ApiService.V1.get).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: "posts/slappy/jody",
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
