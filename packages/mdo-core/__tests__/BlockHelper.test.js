const { BlockHelper } = require("../src");

describe("fromString()", () => {
  it("parses single-line strings correctly", () => {
    expect(BlockHelper.fromString("- [ ] hello world")).toEqual({
      type: "INCOMPLETE_TASK",
      text: "{{type}} hello world"
    });
  });

  it("parses multi-line strings correctly", () => {
    expect(BlockHelper.fromString("- [x] hello\nworld")).toEqual({
      type: "COMPLETE_TASK",
      text: "{{type}} hello\nworld"
    });
  });
});
