const { process, stringify } = require("..");
const { TYPES } = require("@mdo-org/mdo-core/src/BlockHelper");
const { validateBlockTransform } = require("@mdo-org/mdo-core/src/testHelpers");

const time = "2019-01-04T20:15-05:00";
const timezone = "America/Panama";

describe("mdo-plugin-completed", () => {
  describe("process", () => {
    it("adds a .completed attribute to completed to-dos", () =>
      validateBlockTransform(process({ time, timezone }), {
        input: [{ type: TYPES.COMPLETE_TASK, text: "hello" }],
        expectedOutput: [
          {
            type: TYPES.COMPLETE_TASK,
            text: "hello",
            completed: "2019-01-04T20:15-05:00"
          }
        ]
      }));

    it("ignores to-dos that have not been completed", () =>
      validateBlockTransform(process({ time, timezone }), {
        input: [{ type: TYPES.INCOMPLETE_TASK, text: "hello" }],
        expectedOutput: [{ type: TYPES.INCOMPLETE_TASK, text: "hello" }]
      }));

    it("ignores to-dos that already have a .completed value", () =>
      validateBlockTransform(process({ time, timezone }), {
        input: [
          {
            type: TYPES.COMPLETE_TASK,
            text: "hello",
            completed: "2018-05-24T00:00Z"
          }
        ],
        expectedOutput: [
          {
            type: TYPES.COMPLETE_TASK,
            text: "hello",
            completed: "2018-05-24T00:00Z"
          }
        ]
      }));
  });

  describe("stringify", () => {
    it("formats .completed values into MDo's standard date format", () =>
      validateBlockTransform(stringify({ time, timezone }), {
        input: [{ completed: "2019-01-04T20:15-05:00" }],
        expectedOutput: [{ completed: "2019-01-04 at 8:15pm" }]
      }));

    it("ignores blocks without a .completed value", () =>
      validateBlockTransform(stringify({ time, timezone }), {
        input: [{ text: "hello world" }],
        expectedOutput: [{ text: "hello world" }]
      }));
  });
});
