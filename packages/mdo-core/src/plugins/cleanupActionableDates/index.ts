import { PluginT, BlockT, HookOptionsT } from "../../types";
import { Transform } from "stream";

const cleanupActionableDates: PluginT = {
  description: "Removes @start and @postpone dates that are no longer useful.",
  dependencies: ["start", "postpone", "repeat"],
  getHook: (
    hookName: string,
    { time, timezone }: HookOptionsT
  ): Transform | null => {
    if (hookName === "stringify") {
      const now = new Date(time);

      const isInThePast = (dateString: string): boolean =>
        new Date(dateString) < now;

      return new Transform({
        objectMode: true,
        transform(block: BlockT, encoding: string, callback: Function) {
          if (block.postpone && isInThePast(block.postpone)) {
            block.postpone = null;
          }

          if (
            block.start &&
            isInThePast(block.start) &&
            (!block.repeat || block.repeat.type !== "START")
          ) {
            block.start = null;
          }

          this.push(block);
          callback();
        }
      });
    }
    return null;
  }
};

export default cleanupActionableDates;
