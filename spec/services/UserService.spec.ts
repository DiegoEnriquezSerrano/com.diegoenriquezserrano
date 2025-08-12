import { findApiTarget } from "@/utils/apiUtils";
import ApiService from "@/services/ApiService";
import UserService from "@/services/UserService";

afterEach(jest.clearAllMocks);

describe("UserService.ts", () => {
  describe("getProfileByUsername", () => {
    it("sends get request to profile detail path api endpoint", () => {
      UserService.Api.getProfileByUsername({ username: "slappy" }, {});

      expect(ApiService.V1.get).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: "user/profile/slappy",
        opts: {},
      });
    });
  });

  describe("getDashboardProfile", () => {
    it("sends get request to profile detail path api endpoint", () => {
      UserService.Api.getDashboardProfile({ session: "sessioncookie" });

      expect(ApiService.V1.get).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: "dashboard/profile",
        opts: {
          bearer: "sessioncookie",
        },
      });
    });
  });

  describe("submitLogin", () => {
    it("sends post request to dashboard categories path api endpoint", () => {
      UserService.Api.submitLogin({
        params: {
          email: "create",
          password: "password",
        },
      });

      expect(ApiService.V1.post).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: `user/token`,
        opts: {
          data: {
            email: "create",
            password: "password",
          },
        },
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
