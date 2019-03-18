import { mockProcessStdout } from "jest-mock-process";
import cli from "./index";

describe("mdo-cli", () => {
  let result: string;
  let mockStdout: any;

  describe("with --version param", () => {
    beforeEach(async () => {
      mockStdout = mockProcessStdout();
      result = await cli({ printVersion: true });
    });

    afterEach(() => {
      mockStdout.mockRestore();
    });

    it("returns undefined", () => {
      expect(result).toBe(undefined);
    });

    it("prints the version to stdout", () => {
      expect(mockStdout.mock.calls.length).toBe(1);
    });
  });
});
