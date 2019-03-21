const { Transform } = require("stream");
const DateTimeWrapper = require("@mdo-org/mdo-core/lib/DateTimeWrapper");
const normalizeDate = require("@mdo-org/mdo-core/lib/normalizeDate");
const parser = require("./parser");

const parse = ({ time, timezone }) => {
  const DateTime = DateTimeWrapper(time, timezone);
  return new Transform({
    objectMode: true,
    transform(block, encoding, callback) {
      debugger;
      try {
        if (block.postpone) {
          this.push({
            ...block,
            postpone: parser(block.postpone.toLowerCase(), DateTime)
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

const stringify = ({ time, timezone }) =>
  new Transform({
    objectMode: true,
    transform(block, encoding, callback) {
      try {
        if (block.postpone) {
          const dateStr = normalizeDate(block.postpone, { time, timezone });
          this.push({
            ...block,
            postpone: `until ${dateStr}`
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

module.exports = {
  parse,
  stringify
};
