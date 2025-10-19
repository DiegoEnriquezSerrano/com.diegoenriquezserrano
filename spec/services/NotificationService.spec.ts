import { findApiTarget } from "@/utils/apiUtils";
import ApiService from "@/services/ApiService";
import NotificationService from "@/services/NotificationService";

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
  },
}));

afterEach(jest.clearAllMocks);

describe("NotificationService.ts", () => {
  describe("getDashboardNotifications", () => {
    it("sends get request to dashboard notifications path api endpoint", () => {
      NotificationService.Api.getDashboardNotifications({});

      expect(ApiService.V1.get).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: "dashboard/notifications",
        opts: {},
      });
    });
  });

  describe("updateDashboardNotification", () => {
    it("sends get request to dashboard notifications path api endpoint", () => {
      NotificationService.Api.updateDashboardNotification(1, {
        session: "cookie",
      });

      expect(ApiService.V1.put).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: `dashboard/notifications/1`,
        opts: {
          bearer: "cookie",
        },
      });
    });
  });
});
