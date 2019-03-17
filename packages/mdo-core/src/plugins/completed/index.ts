import { PluginT, BlockT, HookOptionsT } from "../../types";
import Block from "../../BlockHelper";
import normalizeDate from "../../normalizeDate";
import { Transform } from "stream";

const completed: PluginT = {
  description: "Adds a @completed timestamp to completed to-dos.",
  dependencies: [],
  getHook: (
    hookName: string,
    { time, timezone }: HookOptionsT
  ): Transform | null => {
    if (hookName === "parse") {
      return new Transform({
        objectMode: true,
        transform(block: BlockT, encoding: string, callback: Function) {
          if (Block.isComplete(block) && !block.completed) {
            block.completed = normalizeDate(time, { time, timezone });
          }
          this.push(block);
          callback();
        }
      });
    }
    return null;
  }
};

export default completed;
