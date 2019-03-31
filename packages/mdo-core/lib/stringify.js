const { Transform } = require("stream");
const Block = require("./BlockHelper");

function stringify() {
  let isFirst = true;

  return new Transform({
    objectMode: true,

    transform(block, enc, callback) {
      let separator = "\n";
      if (isFirst) {
        separator = "";
        isFirst = false;
      }
      this.push(`${separator}${Block.toString(block)}`);
      callback();
    }
  });
}

module.exports = stringify;
