const { Transform } = require("stream");
const DateTimeWrapper = require("@mdo-org/mdo-core/lib/DateTimeWrapper");

const cleanupActionableDates = ({ time, timezone }) => {
  const now = new Date(time);
  const DateTime = DateTimeWrapper(time, timezone);

  const isInThePast = dateString => new Date(dateString) < now;

  const hasStartTime = dateString => {
    const date = DateTime.fromISO(dateString);
    return date.hour > 0 || date.minute > 0;
  };

  return new Transform({
    objectMode: true,
    transform(block, encoding, callback) {
      const changes = {};

      if (block.postpone && isInThePast(block.postpone)) {
        changes.postpone = null;
      }

      if (block.start && isInThePast(block.start)) {
        if (
          !block.repeat ||
          (block.repeat.type === "COMPLETE" && !hasStartTime(block.start))
        ) {
          changes.start = null;
        }
      }

      if (Object.keys(changes).length) {
        this.push({ ...block, ...changes });
      } else {
        this.push(block);
      }

      callback();
    }
  });
};

module.exports = cleanupActionableDates;
