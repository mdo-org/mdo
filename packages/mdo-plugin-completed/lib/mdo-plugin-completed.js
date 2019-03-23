const { Transform } = require("stream");
const BlockHelper = require("@mdo-org/mdo-core/lib/BlockHelper");
const normalizeDate = require("@mdo-org/mdo-core/lib/normalizeDate");

const process = ({ time }) =>
  new Transform({
    objectMode: true,
    transform(block, encoding, callback) {
      if (BlockHelper.isComplete(block) && !block.completed) {
        this.push({ ...block, completed: time });
      } else {
        this.push(block);
      }
      callback();
    }
  });

const stringify = ({ time, timezone }) =>
  new Transform({
    objectMode: true,
    transform(block, encoding, callback) {
      if (block.completed) {
        this.push({
          ...block,
          completed: normalizeDate(block.completed, { time, timezone })
        });
      } else {
        this.push(block);
      }
      callback();
    }
  });

module.exports = {
  process,
  stringify
};
