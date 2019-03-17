import plugin from "./index";
import Block from "../../BlockHelper";
import { BlockT } from "../../types";
import { runBlockTransform } from "../../testHelpers";

const { description, dependencies, getHook } = plugin;

// helper method. Run the blocks through the hook and return the transformed
// block array.
const runHook = (
  hookName: string,
  time: string,
  timezone: string,
  blocks: Array<BlockT>
): Promise<Array<BlockT>> => {
  const hook = getHook(hookName, { time, timezone });
  if (!hook) throw new Error(`${hookName} is not a stream`);
  return runBlockTransform(hook, blocks);
};

describe("Plugin: cleanup actionable dates", () => {
  describe("description", () => {
    it("returns a string", () => {
      expect(typeof description).toBe("string");
    });
  });

  describe("dependencies", () => {
    it("returns an array", () => {
      expect(dependencies).toEqual(["start", "postpone", "repeat"]);
    });
  });

  describe("hooks", () => {
    describe("stringify", () => {
      const runAt = (time: string, props: object) => {
        const block = {
          type: Block.TYPES.INCOMPLETE_TASK,
          text: "hello world",
          ...props
        };
        return runHook("stringify", time, "America/Panama", [block]);
      };

      describe("block with .postpone date in the future", () => {
        it("does nothing", async () => {
          const result = await runAt("2019-03-15T20:00-05:00", {
            postpone: "2019-04-01T00:00-05:00"
          });
          expect(result[0].postpone).toEqual("2019-04-01T00:00-05:00");
        });
      });

      describe("block with .postpone date in the past", () => {
        it("sets .postpone to null", async () => {
          const result = await runAt("2019-03-15T20:00-05:00", {
            postpone: "2019-03-01T00:00-05:00"
          });
          expect(result[0].postpone).toEqual(null);
        });
      });

      describe("block with .start date in the future", () => {
        it("does nothing", async () => {
          const result = await runAt("2019-03-15T20:00-05:00", {
            start: "2019-04-01T00:00-05:00"
          });
          expect(result[0].start).toEqual("2019-04-01T00:00-05:00");
        });
      });

      describe("block with .start date in the past", () => {
        const runTime = "2019-03-15T20:00-05:00";
        const start = "2019-03-01T00:00-05:00";

        describe("and no .repeat", () => {
          it("sets .start to null", async () => {
            const result = await runAt(runTime, {
              start,
              repeat: null
            });
            expect(result[0].start).toEqual(null);
          });
        });

        describe("and .repeat from complete", () => {
          it("sets .start to null", async () => {
            const result = await runAt(runTime, {
              start,
              repeat: { type: "COMPLETE" }
            });
            expect(result[0].start).toEqual(null);
          });
        });

        describe("and .repeat from start", () => {
          it("does nothing", async () => {
            const result = await runAt(runTime, {
              start,
              repeat: { type: "START" }
            });
            expect(result[0].start).toEqual(start);
          });
        });
      });
    });
  });
});
