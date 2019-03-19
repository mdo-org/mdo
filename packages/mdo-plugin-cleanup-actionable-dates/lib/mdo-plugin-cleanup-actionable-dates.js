const { Transform } = require("stream");

const cleanupActionableDates = ({ time }) => {
  const now = new Date(time);

  const isInThePast = dateString => new Date(dateString) < now;

  return new Transform({
    objectMode: true,
    transform(block, encoding, callback) {
      const changes = {};

      if (block.postpone && isInThePast(block.postpone)) {
        changes.postpone = null;
      }

      if (
        block.start &&
        isInThePast(block.start) &&
        (!block.repeat || block.repeat.type !== "START")
      ) {
        changes.start = null;
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
