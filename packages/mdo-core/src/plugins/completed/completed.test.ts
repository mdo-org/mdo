import { BlockT } from "../../types";
import Block from "../../BlockHelper";
import { validateBlockTransform } from "../../testHelpers";
import completed from "./index";

const { description, dependencies, getHook } = completed;

describe("Plugin: completed", () => {
  describe("description", () => {
    it("returns a string", () => {
      expect(typeof description).toBe("string");
    });
  });

  describe("dependencies", () => {
    it("returns an empty array", () => {
      expect(dependencies).toEqual([]);
    });
  });

  describe("hooks", () => {
    describe("parse", () => {
      const run = (testValues: {
        input: Array<BlockT>;
        expectedOutput: Array<BlockT>;
      }) => {
        const parse = getHook("parse", {
          time: "2019-01-04T20:15-05:00",
          timezone: "America/Panama"
        });
        if (!parse) throw new Error("parse did not return a stream");
        return validateBlockTransform(parse, {
          input: testValues.input,
          expectedOutput: testValues.expectedOutput
        });
      };

      it("adds a .completed attribute to completed to-dos", () =>
        run({
          input: [{ type: Block.TYPES.COMPLETE_TASK, text: "hello" }],
          expectedOutput: [
            {
              type: Block.TYPES.COMPLETE_TASK,
              text: "hello",
              completed: "2019-01-04 at 8:15pm"
            }
          ]
        }));

      it("ignores to-dos that have not been completed", () =>
        run({
          input: [{ type: Block.TYPES.INCOMPLETE_TASK, text: "hello" }],
          expectedOutput: [{ type: Block.TYPES.INCOMPLETE_TASK, text: "hello" }]
        }));

      it("ignores to-dos that already have a .completed value", () =>
        run({
          input: [
            {
              type: Block.TYPES.COMPLETE_TASK,
              text: "hello",
              completed: "2018-05-24T00:00Z"
            }
          ],
          expectedOutput: [
            {
              type: Block.TYPES.COMPLETE_TASK,
              text: "hello",
              completed: "2018-05-24T00:00Z"
            }
          ]
        }));
    });
  });
});
