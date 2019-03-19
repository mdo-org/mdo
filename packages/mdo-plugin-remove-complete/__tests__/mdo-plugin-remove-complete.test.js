const removeComplete = require("..");
const { validateBlockTransform } = require("@mdo-org/mdo-core/lib/testHelpers");
const { TYPES } = require("@mdo-org/mdo-core/lib/BlockHelper");

describe("mdo-plugin-remove-complete", () => {
  it("removes complete blocks from the stream", () =>
    validateBlockTransform(removeComplete(), {
      input: [
        { type: TYPES.INCOMPLETE_TASK, text: "a[incomplete]" },
        { type: TYPES.COMPLETE_TASK, text: "b[complete]" },
        { type: TYPES.PADDING, text: "c[padding]" },
        { type: TYPES.COMMENT, text: "d[comment]" }
      ],
      expectedOutput: [
        { type: TYPES.INCOMPLETE_TASK, text: "a[incomplete]" },
        { type: TYPES.PADDING, text: "c[padding]" },
        { type: TYPES.COMMENT, text: "d[comment]" }
      ]
    }));
});
