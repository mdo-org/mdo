const { Transform } = require("stream");
const BlockHelper = require("@mdo-org/mdo-core/lib/BlockHelper");

const removeComplete = () =>
  new Transform({
    objectMode: true,
    transform(block, encoding, callback) {
      if (!BlockHelper.isComplete(block)) {
        this.push(block);
      }
      callback();
    }
  });

module.exports = removeComplete;
