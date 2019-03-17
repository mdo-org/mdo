import { PluginT, BlockT } from "../../types";
import Block from "../../BlockHelper";
import { Transform } from "stream";

const removeCompletePlugin: PluginT = {
  description: "Remove complete to-dos from the document.",
  dependencies: [],
  getHook: (hookName: string): Transform | null => {
    if (hookName === "reshuffle") {
      return new Transform({
        objectMode: true,
        transform(block: BlockT, encoding: string, callback: Function) {
          if (!Block.isComplete(block)) {
            this.push(block);
          }
          callback();
        }
      });
    }
    return null;
  }
};

export default removeCompletePlugin;
