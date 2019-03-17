import { BlockT } from "../../types";
import Block from "../../BlockHelper";
import { validateBlockTransform } from "../../testHelpers";
import removeComplete from "./index";

const { description, dependencies, getHook } = removeComplete;

describe("Plugin: removeComplete", () => {
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
      it("returns null", () => {
        const result = getHook("parse", {
          time: "2019-01-01T00:00Z",
          timezone: "America/Panama"
        });
        expect(result).toBe(null);
      });
    });

    describe("reshuffle", () => {
      const run = (testValues: {
        input: Array<BlockT>;
        expectedOutput: Array<BlockT>;
      }) => {
        const reshuffle = getHook("reshuffle", {
          time: "2019-01-01T00:00Z",
          timezone: "America/Panama"
        });
        if (!reshuffle) throw new Error("reshuffle did not return a stream");
        return validateBlockTransform(reshuffle, {
          input: testValues.input,
          expectedOutput: testValues.expectedOutput
        });
      };

      it("removes complete blocks from the stream", () =>
        run({
          input: [
            { type: Block.TYPES.INCOMPLETE_TASK, text: "a[incomplete]" },
            { type: Block.TYPES.COMPLETE_TASK, text: "b[complete]" },
            { type: Block.TYPES.PADDING, text: "c[padding]" },
            { type: Block.TYPES.COMMENT, text: "d[comment]" }
          ],
          expectedOutput: [
            { type: Block.TYPES.INCOMPLETE_TASK, text: "a[incomplete]" },
            { type: Block.TYPES.PADDING, text: "c[padding]" },
            { type: Block.TYPES.COMMENT, text: "d[comment]" }
          ]
        }));
    });
  });
});
