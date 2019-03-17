import { HookOptionsT, PluginT, BlockT, DateTimeWrapperT } from "../../types";
import { Transform } from "stream";
import parser from "./parser";
import normalizeDate from "../../normalizeDate";
import DateTimeWrapper from "../../DateTimeWrapper";

const parse = ({ time, timezone }: HookOptionsT): Transform => {
  const DateTime = DateTimeWrapper(time, timezone);
  return new Transform({
    objectMode: true,
    transform(block: BlockT, encoding: string, callback: Function) {
      try {
        if (block.start) {
          block.start = parser(block.start.toLowerCase(), DateTime);
        }
      } catch (err) {
        return callback(err);
      }
      this.push(block);
      callback();
    }
  });
};

const stringify = (hookOptions: HookOptionsT): Transform =>
  new Transform({
    objectMode: true,
    transform(block: BlockT, encoding: string, callback: Function) {
      try {
        if (block.start) {
          block.start = normalizeDate(block.start, hookOptions);
        }
      } catch (err) {
        return callback(err);
      }
      this.push(block);
      callback();
    }
  });

const startPlugin: PluginT = {
  description: "Set a start date on your to-dos.",
  dependencies: [],
  getHook: (hookName: string, hookOptions: HookOptionsT): Transform | null => {
    switch (hookName) {
      case "parse":
        return parse(hookOptions);
      case "stringify":
        return stringify(hookOptions);
      default:
        return null;
    }
  }
};

export default startPlugin;
