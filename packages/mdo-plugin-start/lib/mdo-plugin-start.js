const { Transform } = require("stream");
const DateTimeWrapper = require("@mdo-org/mdo-core/src/DateTimeWrapper");
const normalizeDate = require("@mdo-org/mdo-core/src/normalizeDate");
const parser = require("./parser");

const parse = ({ time, timezone }) => {
  const DateTime = DateTimeWrapper(time, timezone);
  return new Transform({
    objectMode: true,
    transform(block, encoding, callback) {
      try {
        if (block.start) {
          this.push({
            ...block,
            start: parser(block.start.toLowerCase(), DateTime)
          });
          return callback();
        }
        this.push(block);
        return callback();
      } catch (err) {
        return callback(err);
      }
    }
  });
};

const stringify = hookOptions =>
  new Transform({
    objectMode: true,
    transform(block, encoding, callback) {
      try {
        if (block.start) {
          this.push({
            ...block,
            start: normalizeDate(block.start, hookOptions)
          });
          return callback();
        }
        this.push(block);
        return callback();
      } catch (err) {
        return callback(err);
      }
    }
  });

module.exports = {
  parse,
  stringify
};
