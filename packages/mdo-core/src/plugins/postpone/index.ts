import { HookOptionsT, PluginT, BlockT, DateTimeWrapperT } from "../../types";
import { Transform } from "stream";
import parser from "./parser";
import DateTimeWrapper from "../../DateTimeWrapper";
import normalizeDate from "../../normalizeDate";

const parse = ({ time, timezone }: HookOptionsT): Transform => {
  const DateTime = DateTimeWrapper(time, timezone);
  return new Transform({
    objectMode: true,
    transform(block: BlockT, encoding: string, callback: Function) {
      try {
        if (block.postpone) {
          block.postpone = parser(block.postpone.toLowerCase(), DateTime);
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
        if (block.postpone) {
          const dateStr = normalizeDate(block.postpone, hookOptions);
          block.postpone = `until ${dateStr}`;
        }
      } catch (err) {
        return callback(err);
      }
      this.push(block);
      callback();
    }
  });

const postponePlugin: PluginT = {
  description: "Postpone your to-dos until a future date.",
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

export default postponePlugin;
