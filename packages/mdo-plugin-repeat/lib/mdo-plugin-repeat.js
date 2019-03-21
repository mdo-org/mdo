const { Transform } = require("stream");
const BlockHelper = require("@mdo-org/mdo-core/lib/BlockHelper");
const DateTimeWrapper = require("@mdo-org/mdo-core/lib/DateTimeWrapper");
const { VALID_REPEAT_TYPES } = require("./constants");
const parser = require("./parser");

const parse = ({ time, timezone }) => {
  const DateTime = DateTimeWrapper(time, timezone);
  return new Transform({
    objectMode: true,
    transform(block, encoding, callback) {
      try {
        if (block.repeat) {
          this.push({
            ...block,
            repeat: parser(block.repeat.toLowerCase(), DateTime)
          });
          return callback();
        }
      } catch (err) {
        return callback(err);
      }
      this.push(block);
      return callback();
    }
  });
};

const stringify = () =>
  new Transform({
    objectMode: true,
    transform(block, encoding, callback) {
      if (block.repeat) {
        this.push({
          ...block,
          repeat: block.repeat.string
        });
        return callback();
      }
      this.push(block);
      return callback();
    }
  });

/*
 * given a block's repeat tag info, return a luxon period
 */
const repeatTagToLuxonPeriod = repeat => ({
  [repeat.period.toLowerCase()]: repeat.n
});

/*
 * given a block with @repeat "from start", update the block's start date.
 */
const newStartDateFromStart = (block, DateTime) => {
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
const newStartDateFromComplete = (block, DateTime) => {
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
const newStartDate = (block, DateTime) => {
  const { type } = block.repeat;
  if (type === VALID_REPEAT_TYPES.start) {
    return newStartDateFromStart(block, DateTime);
  }
  if (type === VALID_REPEAT_TYPES.complete) {
    return newStartDateFromComplete(block, DateTime);
  }
  throw new Error(`Invalid repeat type: ${type}`);
};

const process = ({ time, timezone }) => {
  const DateTime = DateTimeWrapper(time, timezone);
  return new Transform({
    objectMode: true,
    transform(block, encoding, callback) {
      if (BlockHelper.isComplete(block) && block.repeat) {
        this.push({
          ...block,
          start: newStartDate(block, DateTime),
          type: BlockHelper.TYPES.INCOMPLETE_TASK
        });
        return callback();
      }
      this.push(block);
      return callback();
    }
  });
};

module.exports = {
  parse,
  process,
  stringify
};
