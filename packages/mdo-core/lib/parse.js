const pumpify = require("pumpify");
const { Transform } = require("stream");
const Block = require("./BlockHelper");
const Line = require("./LineHelper");

// transforms a buffer stream into a Line objects stream
const bufferToLines = () => {
  let prevChars = "";

  return new Transform({
    objectMode: true,

    // in each chunk, look for newLine chars (`\n`).
    // Everything before a `\n` is a line, everything after a `\n` has to
    // be kept around until we find the next `\n`
    transform(chunk, encoding, callback) {
      prevChars = `${prevChars}${chunk.toString()}`;
      const lines = prevChars.split("\n");
      const lastLine = lines.pop();
      if (typeof lastLine === "string") {
        prevChars = lastLine;
        lines.forEach(lineStr => this.push(Line.fromString(lineStr)));
      }
      callback();
    },

    // if we have dangling chars at the end, those belong in a new line
    flush(callback) {
      this.push(Line.fromString(prevChars));
      callback();
    }
  });
};

// transforms a Line stream into a Block stream
const linesToBlocks = () => {
  let currentBlock;
  return new Transform({
    objectMode: true,

    transform(line, enc, callback) {
      const newBlock = Block.fromLine(line, { isFirstLine: !currentBlock });

      // we created a new block, so we can now push the previous block
      if (newBlock) {
        if (currentBlock) {
          Block.splitByPadding(currentBlock).forEach(block => this.push(block));
        }
        currentBlock = newBlock;
        return callback();
      }

      // we did not create a new block, so we want to append the line to the
      // previous block
      if (currentBlock) {
        Block.appendLine(currentBlock, line);
      }
      return callback();
    },

    flush(callback) {
      this.push(currentBlock);
      callback();
    }
  });
};

const parseTags = () => {
  return new Transform({
    objectMode: true,

    transform(block, enc, callback) {
      try {
        let match;
        /* eslint no-cond-assign: [0], no-param-reassign: [0] */
        while ((match = block.text.match(/@(\w+) ([^@\n]+)/))) {
          const [fullMatch, key, value] = match;
          const rightPadding = value.match(/\s*$/);

          // duplicate tag found
          if (block[key]) {
            const msg = `Duplicate @${key} tag for block:\n${block.text}`;
            throw new Error(msg);
          }

          // add the parsed value to the object
          block[key] = value.trimRight();

          // replace the block text with a placeholder
          block.text = block.text.replace(
            fullMatch,
            `{{${key}}}${rightPadding}`
          );
        }
      } catch (err) {
        return callback(err);
      }
      this.push(block);
      return callback();
    }
  });
};

function parse() {
  return pumpify.obj(bufferToLines(), linesToBlocks(), parseTags());
}

module.exports = parse;
