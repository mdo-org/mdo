const { mockProcessStdout } = require("jest-mock-process");
const run = require("..");

describe("mdo-cli", () => {
  let result;
  let mockStdou;

  describe("with --version param", () => {
    beforeEach(async () => {
      mockStdout = mockProcessStdout();
      result = await run({ printVersion: true });
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
