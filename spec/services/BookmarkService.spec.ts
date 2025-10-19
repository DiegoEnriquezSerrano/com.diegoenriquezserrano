import { findApiTarget } from "@/utils/apiUtils";
import ApiService from "@/services/ApiService";
import BookmarkService from "@/services/BookmarkService";

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

describe("BookmarkService.ts", () => {
  describe("getDashboardBookmarks", () => {
    it("sends get request to dashboard bookmarks path api endpoint", () => {
      BookmarkService.Api.getDashboardBookmarks({});

      expect(ApiService.V1.get).toHaveBeenCalledWith({
        base: findApiTarget(),
        path: "dashboard/bookmarks",
        opts: {},
      });
    });
  });
});
