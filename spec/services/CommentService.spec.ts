import { findApiTarget } from "@/utils/apiUtils";
import ApiService from "@/services/ApiService";
import CommentService from "@/services/CommentService";

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
  },
}));

afterEach(jest.clearAllMocks);

describe("CommentService.ts", () => {
  describe("getDashboardComments", () => {
    it("sends get request to dashboard comments path api endpoint", () => {
      CommentService.Api.getDashboardComments({
        session: "cookie",
      });

      expect(ApiService.V1.get).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: "dashboard/comments",
        opts: { bearer: "cookie" },
      });
    });
  });

  describe("getDashboardComment", () => {
    it("sends get request to dashboard retrieve destroy comment path api endpoint", () => {
      CommentService.Api.getDashboardComment(1, {
        session: "cookie",
      });

      expect(ApiService.V1.get).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: `dashboard/comments/1`,
        opts: {
          bearer: "cookie",
        },
      });
    });
  });

  describe("updateDashboardComment", () => {
    it("sends put request to dashboard retrieve destroy comment path api endpoint", () => {
      CommentService.Api.updateDashboardComment(1, {
        session: "cookie",
        params: {
          body: "update",
        },
      });

      expect(ApiService.V1.put).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: `dashboard/comments/1`,
        opts: {
          bearer: "cookie",
          data: {
            body: "update",
          },
        },
      });
    });
  });

  describe("destroyDashboardComment", () => {
    it("sends delete request to dashboard retrieve destroy comment path api endpoint", () => {
      CommentService.Api.destroyDashboardComment(1, {
        session: "cookie",
      });

      expect(ApiService.V1.del).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: `dashboard/comments/1`,
        opts: {
          bearer: "cookie",
        },
      });
    });
  });
});
