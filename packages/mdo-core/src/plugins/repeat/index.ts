import { HookOptionsT, PluginT, BlockT, DateTimeWrapperT } from "../../types";
import BlockHelper from "../../BlockHelper";
import { Transform } from "stream";
import parser from "./parser";
import { VALID_REPEAT_TYPES } from "./constants";
import DateTimeWrapper from "../../DateTimeWrapper";

type repeatTagT = {
  string: string;
  n: number;
  period: string;
  type: string;
};

const parse = (DateTime: DateTimeWrapperT): Transform =>
  new Transform({
    objectMode: true,
    transform(block: BlockT, encoding: string, callback: Function) {
      try {
        if (block.repeat) {
          block.repeat = parser(block.repeat.toLowerCase(), DateTime);
        }
      } catch (err) {
        return callback(err);
      }
      this.push(block);
      callback();
    }
  });

const stringify = (): Transform =>
  new Transform({
    objectMode: true,
    transform(block: BlockT, encoding: string, callback: Function) {
      if (block.repeat) {
        block.repeat = block.repeat.string;
      }
      this.push(block);
      callback();
    }
  });

/*
 * given a block's repeat tag info, return a luxon period
 */
const repeatTagToLuxonPeriod = (repeat: repeatTagT) => ({
  [repeat.period.toLowerCase()]: repeat.n
});

/*
 * given a block with @repeat "from start", update the block's start date.
 */
const newStartDateFromStart = (
  block: BlockT,
  DateTime: DateTimeWrapperT
): string => {
  if (!block.start) {
    throw new Error("@repeat from start without a @start date");
  }
  const luxonPeriod = repeatTagToLuxonPeriod(block.repeat);
  return DateTime.fromISO(block.start)
    .plus(luxonPeriod)
    .toString();
};

/*
 * given a block with @repeat "from complete", calculate the block's new start
 * date.
 */
const newStartDateFromComplete = (
  block: BlockT,
  DateTime: DateTimeWrapperT
): string => {
  const { hour, minute } = block.start
    ? DateTime.fromISO(block.start)
    : { hour: 0, minute: 0 };
  return DateTime.local()
    .startOf("day")
    .plus(repeatTagToLuxonPeriod(block.repeat))
    .set({ hour, minute })
    .toString();
};

/*
 * given a block, returns a new start date based on the repeat type.
 */
const newStartDate = (block: BlockT, DateTime: DateTimeWrapperT): string => {
  const type = block.repeat.type;
  if (type === VALID_REPEAT_TYPES.start) {
    return newStartDateFromStart(block, DateTime);
  }
  if (type === VALID_REPEAT_TYPES.complete) {
    return newStartDateFromComplete(block, DateTime);
  }
  throw new Error(`Invalid repeat type: ${type}`);
};

const process = (DateTime: DateTimeWrapperT): Transform =>
  new Transform({
    objectMode: true,
    transform(block: BlockT, encoding: string, callback: Function) {
      if (BlockHelper.isComplete(block) && block.repeat) {
        this.push({
          ...block,
          start: newStartDate(block, DateTime),
          type: BlockHelper.TYPES.INCOMPLETE_TASK
        });
        return callback();
      }
      this.push(block);
      callback();
    }
  });

const repeatPlugin: PluginT = {
  description:
    "Re-schedule completed todos so they show up again in a future date.",
  dependencies: ["start"],
  getHook: (
    hookName: string,
    { time, timezone }: HookOptionsT
  ): Transform | null => {
    const DateTime = DateTimeWrapper(time, timezone);
    switch (hookName) {
      case "parse":
        return parse(DateTime);
      case "process":
        return process(DateTime);
      case "stringify":
        return stringify();
      default:
        return null;
    }
  }
};

export default repeatPlugin;
