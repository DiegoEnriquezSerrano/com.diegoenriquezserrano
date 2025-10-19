import { findApiTarget } from "@/utils/apiUtils";
import ApiService from "@/services/ApiService";
import CategoryService from "@/services/CategoryService";

afterEach(jest.clearAllMocks);

describe("CategoryService.ts", () => {
  describe("getDashboardCategories", () => {
    it("sends get request to dashboard categories path api endpoint", () => {
      CategoryService.Api.getDashboardCategories({ session: "sessioncookie" });

      expect(ApiService.V1.get).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: "dashboard/categories",
        opts: {
          bearer: "sessioncookie",
        },
      });
    });
  });

  describe("getDashboardCategory", () => {
    it("sends get request to dashboard category detail path api endpoint", () => {
      CategoryService.Api.getDashboardCategory(
        { slug: "jody" },
        { session: "sessioncookie" },
      );

      expect(ApiService.V1.get).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: "dashboard/categories/jody",
        opts: {
          bearer: "sessioncookie",
        },
      });
    });
  });

  describe("createDashboardCategory", () => {
    it("sends post request to dashboard categories path api endpoint", () => {
      CategoryService.Api.createDashboardCategory({
        session: "cookie",
        params: {
          name: "create",
        },
      });

      expect(ApiService.V1.post).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: `dashboard/categories`,
        opts: {
          bearer: "cookie",
          data: {
            name: "create",
          },
        },
      });
    });
  });

  describe("updateDashboardCategory", () => {
    it("sends put request to dashboard category detail path api endpoint", () => {
      CategoryService.Api.updateDashboardCategory(
        { slug: "jody" },
        {
          session: "cookie",
          params: {
            name: "update",
          },
        },
      );

      expect(ApiService.V1.put).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: `dashboard/categories/jody`,
        opts: {
          bearer: "cookie",
          data: {
            name: "update",
          },
        },
      });
    });
  });

  describe("destroyDashboardCategory", () => {
    it("sends put request to dashboard category detail path api endpoint", () => {
      CategoryService.Api.destroyDashboardCategory(
        { slug: "jody" },
        {
          session: "cookie",
        },
      );

      expect(ApiService.V1.del).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: `dashboard/categories/jody`,
        opts: {
          bearer: "cookie",
        },
      });
    });
  });

  describe("getCategories", () => {
    it("sends get request to categories path api endpoint", () => {
      CategoryService.Api.getCategories({});

      expect(ApiService.V1.get).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: "categories",
        opts: {},
      });
    });
  });

  describe("getCategoriesByUsername", () => {
    it("sends get request to categories by user path api endpoint", () => {
      CategoryService.Api.getCategoriesByUsername({ username: "slappy" }, {});

      expect(ApiService.V1.get).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: "categories/slappy",
        opts: {},
      });
    });
  });

  describe("getCategoryByUsernameAndSlug", () => {
    it("sends get request to category detail path api endpoint", () => {
      CategoryService.Api.getCategoryByUsernameAndSlug(
        { username: "slappy", slug: "jody" },
        {},
      );

      expect(ApiService.V1.get).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: "categories/slappy/jody",
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
