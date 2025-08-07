import { findApiTarget } from "@/utils/apiUtils";
import ApiService from "@/services/ApiService";
import DashboardService from "@/services/DashboardService";

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
  },
}));

afterEach(jest.clearAllMocks);

describe("DashboardService.ts", () => {
  describe("getDashboardStats", () => {
    it("sends get request to dashboard stats path api endpoint", () => {
      DashboardService.Api.getDashboardStats({});

      expect(ApiService.V1.get).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: "dashboard/stats",
        opts: {},
      });
    });
  });
});
